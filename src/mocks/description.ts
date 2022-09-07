interface planDetailsProps {
    product_basic_information: {
        title: string,
        date_cycle_renewal: string,
        plan_value: string,
        data_allowance: string,
        call_sms_tariffs: string,
        loyalty_time: string
    }
}

interface detailsContractualInformationProps {
    title: string,
    value: string
}

interface contractualInformationProps {
    contractual_information: {
        internet_information: {
            details: Array<detailsContractualInformationProps>,
        },
        call_information: {
            details: Array<detailsContractualInformationProps>
        },
        sms_information: {
            details: Array<detailsContractualInformationProps>
        }
    }
}

export const description = [
    "Aproveite Whatsapp, Waze e Moovit à vontade. O Whatsapp é ilimitado para o envio de mensagens, fotos, vídeos e chamadas de voz. As chamadas de vídeo são descontadas da franquia do plano. Já os apps de mobilidade não descontam dos seus dados.",
    "Com o plano Controle, você pode baixar os apps inclusos no seu plano pelas opções disponíveis nesta lista. Depois de escolher, é só ativar e aproveitar."
]

export const basicInformation : planDetailsProps = {
    product_basic_information: {
        title:"VIVO CONTROLE 4GB II",
        date_cycle_renewal:"09/09/22",
        plan_value:"R$ 34,99/mês",
        data_allowance:"4GB para usar como quiser",
        call_sms_tariffs:"Ilimitado, usando o código 15",
        loyalty_time:"12 meses"
    }
};

export const relatedApps = [
    {
        "ralated_apps": {
          "included": {
            "app_list": [
              {
                "name": "Go Read",
                "icon": "PD_GOREAD",
                "description": "Seu plano inclui aplicativos com conteúdos exclusivos, é só baixar na Vivo App Store"
              },
              {
                "name": "Babbel",
                "icon": "PD_BABBEL",
                "description": "Seu plano inclui aplicativos com conteúdos exclusivos, é só baixar na Vivo App Store"
              },
              {
                "name": "Skeelo",
                "icon": "PD_SKEELO",
                "description": "Seu plano inclui aplicativos com conteúdos exclusivos, é só baixar na Vivo App Store"
              }
            ]
          },
          "unlimited": {
            "app_list": [
              {
                "name": "WhatsApp",
                "icon": "PD_WHATSAPP",
                "description": "WhatsApp"
              },
              {
                "name": "Waze",
                "icon": "PD_WAZE",
                "description": "Waze"
              },
              {
                "name": "Cabify",
                "icon": "PD_CABIFY",
                "description": "Cabify"
              },
              {
                "name": "Moovit",
                "icon": "PD_MOOVIT",
                "description": "Moovit"
              },
              {
                "name": "Vivoplay",
                "icon": "PD_VIVOPLAY",
                "description": "Vivoplay"
              }
            ]
          }
        }
      }
]

export const contractualInformation : contractualInformationProps =
    {
        "contractual_information":{
           "internet_information":{
              "details":[
                 {
                    "title":"Velocidade de download",
                    "value":"5 MBPS"
                 },
                 {
                    "title":"Velocidade de upload",
                    "value":"1 MBPS"
                 },
                 {
                    "title":"Velocidade de download em velocidade reduzida (por bloqueio parcial)",
                    "value":"64 KBPS"
                 },
                 {
                    "title":"Velocidade de upload em velocidade reduzida (por bloqueio parcial)",
                    "value":"64 KBPS"
                 },
                 {
                    "title":"Franquia de dados",
                    "value":"4GB"
                 }
              ]
           },
           "call_information":{
              "details":[
                 {
                    "title":"Unidade de Cobrança",
                    "value":"minuto"
                 },
                 {
                    "title":"Tempo Inicial de Tarifação",
                    "value":"Não"
                 },
                 {
                    "title":"Ligações Locais Vivo Fixo",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Longa Distância(utilizando código 15) para Vivo Móvel",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Longa Distância(utilizando código 15) para Vivo Fixo",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Locais para móvel de outras operadoras",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Locais para fixo de outras operadoras",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Longa Distância(utilizando código 15) para móvel de outras operadoras",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Longa Distância(utilizando código 15) para fixo de outras operadoras",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações locais excedentes para móvel de outras operadoras",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Ligações Longa Distância excedentes para fixo de outras operadoras",
                    "value":"Ilimitado"
                 }
              ]
           },
           "sms_information":{
              "details":[
                 {
                    "title":"Valor do SMS Excedente - Para número Vivo",
                    "value":"Ilimitado"
                 },
                 {
                    "title":"Valor do SMS Excedente - Outras operadoras",
                    "value":"Ilimitado"
                 }
              ]
           }
        }
     }