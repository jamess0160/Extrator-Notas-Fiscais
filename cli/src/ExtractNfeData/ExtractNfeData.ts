import axios from "axios";
import { parseFromString } from 'dom-parser';
import { ExtractItems } from "./ExtractItems";
import { GetDanfeValue } from "./GetDanfeValue";

export class ExtractNfeData {

    private readonly ExtractItems = new ExtractItems()
    private readonly GetDanfeValue = new GetDanfeValue()

    public async run(danfe: string): Promise<DanfeDataResult> {

        let danfeData = await this.getDanfeData(danfe)

        let { Valid, Message } = this.isDanfeValid(danfe, danfeData)

        if (Valid === false && Message) {
            return { Valid, Message }
        }

        let dom = parseFromString(danfeData)

        return {
            Valid: true,
            Company: dom.getElementsByClassName("NFCCabecalho_SubTitulo")[0]?.innerHTML,
            Value: this.GetDanfeValue.run(dom),
            Items: this.ExtractItems.run(dom)
        }
    }

    private async getDanfeData(danfe: string) {

        let formData = new URLSearchParams({
            HML: "false",
            chaveNFe: danfe,
        })

        let { data } = await axios.post<string>("https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-NFC_2.asp", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })

        return data
    }

    private isDanfeValid(danfe: string, danfeData: string) {
        if (danfe.length !== 44) {
            return {
                Valid: false,
                Message: "Código DANFE inválido"
            }
        }

        if (danfeData.includes("Documento Fiscal (NFC-e) inexistente na base de dados da SEFAZ")) {
            return {
                Valid: false,
                Message: "DANFE não encontrada"
            }
        }

        return { Valid: true }
    }
}

export interface DanfeData {
    Valid: true
    Company: string
    Value: number
    Items: NfeItem[]
}

interface NfeItem {
    Description: string
    Quantity: number
    UN: string
    UnityValue: number
    TotalValue: number
}


interface DanfeError {
    Valid: false,
    Message: string
}

type DanfeDataResult = DanfeData | DanfeError