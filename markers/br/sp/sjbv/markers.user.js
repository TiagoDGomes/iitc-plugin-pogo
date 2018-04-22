// ==UserScript==
// @id             iitc-plugin-pogo-br-sp-sjbv
// @name           IITC plugin: pogo for portals (update markers: Sao Joao da Boa Vista - SP - Brazil)
// @category       Controls
// @version        0.1.2.20180422.173500
// @updateURL      https://github.com/TiagoDGomes/iitc-plugin-pogo/raw/master/markers/br/sp/sjbv/markers.meta.js
// @downloadURL    https://github.com/TiagoDGomes/iitc-plugin-pogo/raw/master/markers/br/sp/sjbv/markers.user.js
// @description    Update
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @include        https://www.ingress.com/mission/*
// @include        http://www.ingress.com/mission/*
// @match          https://www.ingress.com/mission/*
// @match          http://www.ingress.com/mission/*
// @grant          none
// ==/UserScript==

var KEY_STORAGE = 'plugin-pogo';
var DEFAULT_VALUE_STORAGE = JSON.stringify({
    "maps": {
        "idOthers": {
            "label": "Others",
            "state": 1,
            "pogo": {}
        }
    },
    "portals": {
        "idOthers": {
            "label": "Others",
            "state": 1,
            "pogo": {}
        }
    }
});

if (localStorage[window.plugin.pogo.KEY_STORAGE] == undefined || localStorage[window.plugin.pogo.KEY_STORAGE] == {} || localStorage[window.plugin.pogo.KEY_STORAGE] == DEFAULT_VALUE_STORAGE)
    localStorage[window.plugin.pogo.KEY_STORAGE] = JSON.stringify({
            "maps": {
                "idOthers": {
                    "label": "Others",
                    "state": 1,
                    "pogo": {}
                }
            },
            "portals": {
                "idOthers": {
                    "label": "Others",
                    "state": 1,
                    "pogo": {}
                },
                "id1524336782698": {
                    "label": "gym",
                    "state": 1,
                    "pogo": {
                        "id1524337102465": {
                            "guid": "06f080957b59441ea0e66f5360036d6e.16",
                            "latlng": "-21.994024,-46.780563",
                            "label": "Aliança Pentecostal de Missões"
                        },
                        "id1524337130611": {
                            "guid": "be42f74a113d4943866ab523efec0126.16",
                            "latlng": "-21.993507,-46.78247",
                            "label": "Igreja Pentecostal De Milagres"
                        },
                        "id1524337133171": {
                            "guid": "222744924dca4749b72733b5f0f26294.16",
                            "latlng": "-21.991511,-46.780992",
                            "label": "Assembléia de Deus do Avivamento"
                        },
                        "id1524337141249": {
                            "guid": "4acbd72e22d4469583fef977437504e0.16",
                            "latlng": "-22.001677,-46.777787",
                            "label": "Caixa Dagua Jardim Primavera"
                        },
                        "id1524337145559": {
                            "guid": "139407f3e9c84336aeb4e1ee61936415.16",
                            "latlng": "-22.003522,-46.77797",
                            "label": "Congregação Cristã No Brasil"
                        },
                        "id1524337485359": {
                            "guid": "acba53699f4f4678ab929f4bccd2559d.16",
                            "latlng": "-21.989273,-46.779965",
                            "label": "Igreja Santuário De Adoração FAMÍLIA Debaixo Da Graça"
                        },
                        "id1524337492630": {
                            "guid": "10e8971eb2274e93a635e70a7d3f62c1.16",
                            "latlng": "-21.987526,-46.781441",
                            "label": "Assembleia de Deus"
                        },
                        "id1524337500037": {
                            "guid": "b1ec322bfae841e89850c6c00c3d0555.16",
                            "latlng": "-21.987931,-46.775103",
                            "label": "Caboclo Pena Branca"
                        },
                        "id1524337519354": {
                            "guid": "dbdef0e6dc484827badc170edf3c0efa.16",
                            "latlng": "-21.985007,-46.782235",
                            "label": "Igreja do Evangelho Quadrangular"
                        },
                        "id1524337528491": {
                            "guid": "86b8e3a74f904366bd0e989b23fd4583.16",
                            "latlng": "-21.980995,-46.779537",
                            "label": "Igreja São Cristóvão"
                        },
                        "id1524337544609": {
                            "guid": "69ed975fc8f44743bf4c7a87ff1014ab.16",
                            "latlng": "-21.9799,-46.78487",
                            "label": "Estrada SP-342"
                        },
                        "id1524337548446": {
                            "guid": "2aca76379b884b228ff7b78c3f5afc55.16",
                            "latlng": "-21.977905,-46.785353",
                            "label": "Igreja Sara Nossa Terra"
                        },
                        "id1524337559618": {
                            "guid": "95b0681944304d1689e27c2ca98d7fd6.16",
                            "latlng": "-21.985424,-46.788325",
                            "label": "Igreja Evangélica Lírio dos Vales"
                        },
                        "id1524337608891": {
                            "guid": "eba5a34b589d4b848835757171fe5318.16",
                            "latlng": "-21.983843,-46.793388",
                            "label": "Capela Cemitério São João Da Boa Vista"
                        },
                        "id1524337611658": {
                            "guid": "c0cffa8a71e94959a2ff79d3c89584f4.16",
                            "latlng": "-21.984135,-46.792804",
                            "label": "Maria E As Flores"
                        },
                        "id1524337652082": {
                            "guid": "01d69bba3e8c4da5b3e1c9b57ca20b32.16",
                            "latlng": "-21.979409,-46.794205",
                            "label": "Slenderman - Rua 14 de Julho"
                        },
                        "id1524337655807": {
                            "guid": "cb5297d9a0ca4f89a799e0af160866b9.16",
                            "latlng": "-21.979779,-46.797659",
                            "label": "São Vicente"
                        },
                        "id1524337679847": {
                            "guid": "1ea35c92dda4405ebe4f339c910a4641.16",
                            "latlng": "-21.974577,-46.794363",
                            "label": "Igreja Internacional Da Graça De Deus "
                        },
                        "id1524337700701": {
                            "guid": "2a8e1496589d473f9695fda3818812a8.16",
                            "latlng": "-21.973038,-46.799058",
                            "label": "Igreja Coração De Maria "
                        },
                        "id1524337703890": {
                            "guid": "32b4fd63e3fe4400b439fed6a31576b5.16",
                            "latlng": "-21.973252,-46.797674",
                            "label": "Busto de João Bernardes "
                        },
                        "id1524337721550": {
                            "guid": "b853e372cb6c4204acb0776c4d6ac7f0.16",
                            "latlng": "-21.9711,-46.79828",
                            "label": "Praça Joaquim José "
                        },
                        "id1524337732358": {
                            "guid": "5ee690491eba41e7b6b470283349ec32.16",
                            "latlng": "-21.971642,-46.796203",
                            "label": "Loja Maçonica São João Da Boa Vista"
                        },
                        "id1524337738198": {
                            "guid": "d1f59aa63ea8473c8ab2a94671189c25.16",
                            "latlng": "-21.969245,-46.797317",
                            "label": "Museu Pedagógico Dr. Armando Salles de Oliveira"
                        },
                        "id1524337755916": {
                            "guid": "c83750064bec46f3b9ef91e6dd5efff2.16",
                            "latlng": "-21.968069,-46.791477",
                            "label": "Igreja do Evangelho Quadrangular"
                        },
                        "id1524337760261": {
                            "guid": "b2e39ee25ce34f739035d52259aef2a3.16",
                            "latlng": "-21.966473,-46.790245",
                            "label": "Seminário Diocesano São João Da Boa Vista"
                        },
                        "id1524337763348": {
                            "guid": "945f585f270b424194eb7190a5bd4f52.11",
                            "latlng": "-21.965626,-46.791732",
                            "label": "praça do Cristo"
                        },
                        "id1524337823811": {
                            "guid": "a8a310cc52c04864a7ad0202bf33008d.16",
                            "latlng": "-21.966651,-46.798857",
                            "label": "Sodom Motorcicle"
                        },
                        "id1524337838370": {
                            "guid": "1eaa7d44a0a641e6aeab93aebc2594fd.16",
                            "latlng": "-21.962351,-46.798559",
                            "label": "Praça Caminho Da Fé "
                        },
                        "id1524337852438": {
                            "guid": "8e101924bd7f4ff5bd180b05afcfab0e.16",
                            "latlng": "-21.95616,-46.799388",
                            "label": "Igreja São Sebastião"
                        },
                        "id1524337873426": {
                            "guid": "15c98913dd07468491a6da5fecb9f089.16",
                            "latlng": "-21.964881,-46.813185",
                            "label": "Condomínio Residencial Maestro Mourão "
                        },
                        "id1524337904328": {
                            "guid": "ba4c85eeaa29450dbe29c8ca4ef5166b.16",
                            "latlng": "-21.975492,-46.815889",
                            "label": "Praça N.S. De Fátima "
                        },
                        "id1524337940459": {
                            "guid": "0ba8dbb9f162476dbfced4e2b8dfdb7b.16",
                            "latlng": "-21.974995,-46.777513",
                            "label": "Praça Italo Beraldo "
                        },
                        "id1524337962337": {
                            "guid": "ede6904902674af581eff2259c4c3640.16",
                            "latlng": "-21.976991,-46.790528",
                            "label": "Grafite Mulher e o Prédio em chamas "
                        },
                        "id1524337980744": {
                            "guid": "102f3aea18ef48bebeebd1947995a454.16",
                            "latlng": "-21.97876,-46.808598",
                            "label": "Fepasa Rua Santo Antônio"
                        },
                        "id1524338016414": {
                            "guid": "276a06ba1c4d448da8941363f8976f47.16",
                            "latlng": "-21.988998,-46.793272",
                            "label": "Terminal Rodoviário Entrada"
                        },
                        "id1524338075287": {
                            "guid": "26f33b15c9b94582b9ee167dd1ae4865.16",
                            "latlng": "-22.007385,-46.778437",
                            "label": "Igreja Evangélica Avivamento Biblico"
                        },
                        "id1524338082646": {
                            "guid": "fc9f58df7e534dfd9c3a47ba689ed7c5.16",
                            "latlng": "-22.007184,-46.782288",
                            "label": "Caixa De Agua Jardim Ipê "
                        },
                        "id1524338088446": {
                            "guid": "2c20eafe1a63444b95376d7a2474bf0c.16",
                            "latlng": "-22.006007,-46.783809",
                            "label": "Grafite O Barbeiro "
                        },
                        "id1524338224367": {
                            "guid": "f8ac9171306e448ea70cff5b79abb9bb.16",
                            "latlng": "-21.963718,-46.792295",
                            "label": "Centro De Integração Comunitária"
                        },
                        "id1524338304264": {
                            "guid": "f8e2a03031ab48829dbaa3233cf98917.16",
                            "latlng": "-21.968053,-46.760348",
                            "label": "Trova Em Homenagem Aos Cem Anos Do Teatro Municipal"
                        },
                        "id1524338321609": {
                            "guid": "4a842fdc6fae47ee9afdf788d1841f19.16",
                            "latlng": "-21.967114,-46.745288",
                            "label": "Praca Otávio Bastos"
                        },
                        "id1524338334423": {
                            "guid": "dce71b55a41e405f960348a448c8dd63.16",
                            "latlng": "-21.962424,-46.740739",
                            "label": "ARES - Jardim Pousada do Sol"
                        },
                        "id1524421831667": {
                            "guid": "0d58445039184d63be591d789fd3e5ad.16",
                            "latlng": "-21.974363,-46.813462",
                            "label": "Assembleia de Deus"
                        },
                        "id1524429021556": {
                            "guid": "27ae82954e5f4404bab0f7378a3d050c.16",
                            "latlng": "-21.979308,-46.812258",
                            "label": "Igreja do Evangelho Quadrangular "
                        }
                    }
                },
                "id1524336782673": {
                    "label": "pokestop",
                    "state": 1,
                    "pogo": {
                        "id1524337173181": {
                            "guid": "885ab00f685748c79e655f20ddbea9c3.16",
                            "latlng": "-21.989876,-46.77135",
                            "label": "Assembleia de Deus - Jardim São Salvador"
                        },
                        "id1524337257432": {
                            "guid": "692d20b0a8314af2b4468cc654f3cc25.16",
                            "latlng": "-21.99035,-46.78432",
                            "label": "Igreja de Jesus Cristo"
                        },
                        "id1524337262947": {
                            "guid": "2031e41c0e3c42cba4807562200b0ff0.16",
                            "latlng": "-21.992035,-46.782369",
                            "label": "Igreja Evangélica Assembléia de Deus"
                        },
                        "id1524337267954": {
                            "guid": "7bbc248c88cc43cab8afb4fe3648d49a.16",
                            "latlng": "-21.99182,-46.781554",
                            "label": "Igreja Pentecostal Deus É Amor"
                        },
                        "id1524337271356": {
                            "guid": "9ba809baa4844a14b48c128c094ffb35.16",
                            "latlng": "-21.992964,-46.780435",
                            "label": "Igreja Do Evangelho Quadrangular"
                        },
                        "id1524337274701": {
                            "guid": "05cc077566d54f71a91cb0ec6cba0aab.16",
                            "latlng": "-21.993918,-46.78034",
                            "label": "Interruptor Graffiti"
                        },
                        "id1524337277639": {
                            "guid": "07d793328da14c079c9c0d45401c6dc6.16",
                            "latlng": "-21.994582,-46.781177",
                            "label": "Igreja Santa Rita De Cassia"
                        },
                        "id1524337474347": {
                            "guid": "1bfd200bde534409ae676d68d75e7acc.16",
                            "latlng": "-21.992099,-46.779612",
                            "label": "Arte De Ladrilhos Menino Feliz"
                        },
                        "id1524337476947": {
                            "guid": "7252608e2e3347e4a6c64d9b178c0000.16",
                            "latlng": "-21.991549,-46.777114",
                            "label": "Igreja Pentecostal Nova Vida em Cristo"
                        },
                        "id1524337479182": {
                            "guid": "4543115b8a1546ef9eaf50a0a07a9cda.16",
                            "latlng": "-21.991593,-46.77565",
                            "label": "Praça Benedito Antônio Lourenço"
                        },
                        "id1524337494873": {
                            "guid": "7552a21efadc476db4b62357d0134243.16",
                            "latlng": "-21.987037,-46.779927",
                            "label": "Igreja Sagrado Coração De Jesus"
                        },
                        "id1524337502485": {
                            "guid": "6e99a4937571422fb821e2fdb156df09.16",
                            "latlng": "-21.987785,-46.7721",
                            "label": "Igreja do Jardim Crepúsculo"
                        },
                        "id1524337506805": {
                            "guid": "2ff94d643f2948ed9296f5fb8d14e925.16",
                            "latlng": "-21.988172,-46.786822",
                            "label": "Paróquia Senhor Bom Jesus"
                        },
                        "id1524337510703": {
                            "guid": "69279d55ae5c4302b24409241736593a.16",
                            "latlng": "-21.986758,-46.786962",
                            "label": "Igreja Presbiteriana - Vila Fleming"
                        },
                        "id1524337513089": {
                            "guid": "3903a010f2b346fd93b89a9b0a8cc093.16",
                            "latlng": "-21.986767,-46.786288",
                            "label": "Igreja Casa do Senhor"
                        },
                        "id1524337521901": {
                            "guid": "87fd44decd5b4dd4abf1dda93434f2ae.16",
                            "latlng": "-21.982715,-46.783244",
                            "label": "Assembleia de Deus Paulistana"
                        },
                        "id1524337526145": {
                            "guid": "77620d1d47794af491eb3e8c0898d697.16",
                            "latlng": "-21.981853,-46.780234",
                            "label": "Parquinho"
                        },
                        "id1524337531300": {
                            "guid": "e8bff328bf474d35a9f770b0ca0d04bb.16",
                            "latlng": "-21.983053,-46.777378",
                            "label": "Caixa D'água do CRAS"
                        },
                        "id1524337535303": {
                            "guid": "e8b462564521483f8dd986bc154217a5.16",
                            "latlng": "-21.984406,-46.775928",
                            "label": "Academia ao Ar Livre"
                        },
                        "id1524337537926": {
                            "guid": "38d21cd915fa45aa854383c40a5ec74b.16",
                            "latlng": "-21.985488,-46.774943",
                            "label": "Parquinho Infantil"
                        },
                        "id1524337541273": {
                            "guid": "85e15ffc515d4b2687c5f3c4d3934921.16",
                            "latlng": "-21.98066,-46.780251",
                            "label": "Igreja Presbiteriana Do Brasil"
                        },
                        "id1524337551435": {
                            "guid": "349028e2606042fcb7f0a8829b870933.16",
                            "latlng": "-21.9786,-46.785092",
                            "label": "Caixa D'agua Big Bom"
                        },
                        "id1524337602511": {
                            "guid": "aaaea432d2144abfa16d22d2d2010425.16",
                            "latlng": "-21.981849,-46.791838",
                            "label": "Congregação Cristã No Brasil "
                        },
                        "id1524337606000": {
                            "guid": "69c7338079544ca5af6c0944eaf4aa59.16",
                            "latlng": "-21.983244,-46.79288",
                            "label": "Anjo Entristecido"
                        },
                        "id1524337614994": {
                            "guid": "e22ca9fb1d474006908f4f1a3f6cd98e.16",
                            "latlng": "-21.984769,-46.792314",
                            "label": "Jesus Contemplativo"
                        },
                        "id1524337621223": {
                            "guid": "322d83644ce14a98b546cfcaaa80c147.16",
                            "latlng": "-21.983866,-46.792925",
                            "label": "Arte Sepulcral"
                        },
                        "id1524337624917": {
                            "guid": "d79f3d847ab64194950527ed7d02aa9e.16",
                            "latlng": "-21.983613,-46.793386",
                            "label": "Estátua Da Virgem Maria"
                        },
                        "id1524337627967": {
                            "guid": "d6feba0647ae40eb85a856c91ed79916.16",
                            "latlng": "-21.984368,-46.793659",
                            "label": "Jesus Cristo"
                        },
                        "id1524337631509": {
                            "guid": "5bac552a727b4e1db8b5af461ed27796.16",
                            "latlng": "-21.98427,-46.793861",
                            "label": "São Cristóvão"
                        },
                        "id1524337634877": {
                            "guid": "d15371a5ae754deea780f56b7569778e.16",
                            "latlng": "-21.984568,-46.794886",
                            "label": "Caixa Dagua Central São João"
                        },
                        "id1524337638278": {
                            "guid": "bff7ec55a8d248e3a6e8685997bbe7ff.16",
                            "latlng": "-21.983873,-46.794934",
                            "label": "Meninos No Barco"
                        },
                        "id1524337647148": {
                            "guid": "c5a06374002043cc876288718eeb17fb.16",
                            "latlng": "-21.981854,-46.794505",
                            "label": "Velório Municipal De São João Da Boa Vista "
                        },
                        "id1524337650260": {
                            "guid": "f75f64bcdd584d95bbdd2bbd8c815486.16",
                            "latlng": "-21.980018,-46.795057",
                            "label": "Irmandade Espírita Pai Benedito de Aruanda"
                        },
                        "id1524337659259": {
                            "guid": "84b4d8aa878f42f58a6857954be48b9f.16",
                            "latlng": "-21.977828,-46.798539",
                            "label": "Igreja Universal Do Reino De Deus"
                        },
                        "id1524337662167": {
                            "guid": "c3902974b9ba410eb916d4218ea54211.16",
                            "latlng": "-21.977238,-46.799126",
                            "label": "Correios "
                        },
                        "id1524337665603": {
                            "guid": "d517303350e849a199a9d6673392f8a6.16",
                            "latlng": "-21.975879,-46.798269",
                            "label": "Busto de Fernando Furlaneto"
                        },
                        "id1524337667760": {
                            "guid": "32d38c12273c4edba9f80609c0497915.16",
                            "latlng": "-21.975531,-46.796616",
                            "label": "Loja Maçonica Presidente Rooselvelt"
                        },
                        "id1524337671166": {
                            "guid": "52ccfc46e5c9467591510dba4cd69b40.16",
                            "latlng": "-21.975007,-46.795742",
                            "label": "Centro Espírita Allan Kardec"
                        },
                        "id1524337674213": {
                            "guid": "d48b0ddd4d2c4b17be468d3c07f2e7f7.16",
                            "latlng": "-21.976559,-46.794368",
                            "label": "Cruz Unidos em Cristo"
                        },
                        "id1524337676850": {
                            "guid": "746591aeac6844a0934c2284e0000aa1.11",
                            "latlng": "-21.97683,-46.794423",
                            "label": "Perpétuo Socorro"
                        },
                        "id1524337687142": {
                            "guid": "857d8a103b844cc19c36a3a9a3e9fd16.16",
                            "latlng": "-21.977446,-46.80104",
                            "label": "O Menino Ilhado"
                        },
                        "id1524337689875": {
                            "guid": "4bf29a0ec04241ca87619ea8f6b95188.16",
                            "latlng": "-21.977213,-46.801756",
                            "label": "Igreja São Benedito"
                        },
                        "id1524337692741": {
                            "guid": "a3a2e3a28feb4faa8b4daf6c3cb943c3.16",
                            "latlng": "-21.975185,-46.800145",
                            "label": "Praça Da Bandeira "
                        },
                        "id1524337695303": {
                            "guid": "26cfb02824d745eb86519342bbaab99e.16",
                            "latlng": "-21.974536,-46.80038",
                            "label": "Congregação Cristã No Brasil "
                        },
                        "id1524337706315": {
                            "guid": "723a605aabb941f5926f7549db00081a.16",
                            "latlng": "-21.973165,-46.797869",
                            "label": "Cine Galeria Ouro Branco"
                        },
                        "id1524337717931": {
                            "guid": "18d7c11058f44cd289818c6771f09033.16",
                            "latlng": "-21.97154,-46.798817",
                            "label": " Centro Livre De Arte E Cultura"
                        },
                        "id1524337723669": {
                            "guid": "582768dc692249a18520118c5253abdf.16",
                            "latlng": "-21.971161,-46.796974",
                            "label": "Bispado E Museu De Arte Sacra De São João Da Boa Vista"
                        },
                        "id1524337726616": {
                            "guid": "6910cec255574581b867904dfd0a6666.16",
                            "latlng": "-21.970996,-46.797753",
                            "label": "Grupo Escolar E Museu Da Educação "
                        },
                        "id1524337729101": {
                            "guid": "aabf60dce0834756bd5e7f87db1ae27f.16",
                            "latlng": "-21.970722,-46.798007",
                            "label": "Diretório Praça Coronel Joaquim José"
                        },
                        "id1524337735448": {
                            "guid": "40cde06cb9fe4ccfa8fbe0e95fb77684.16",
                            "latlng": "-21.969547,-46.796994",
                            "label": "Centro Cultural Patrícia Rehder Galvão"
                        },
                        "id1524337748868": {
                            "guid": "dff2e19359c240239e7607aa62b33b2a.16",
                            "latlng": "-21.969879,-46.793474",
                            "label": "Centro Cultural Octávio Bastos"
                        },
                        "id1524337750870": {
                            "guid": "29d0178487f243359700aefc21380398.16",
                            "latlng": "-21.969945,-46.792535",
                            "label": "Igreja Vencedores Do Senhor Jesus"
                        },
                        "id1524337757976": {
                            "guid": "7b0e050a77ca4b3d9bd0b8e0d69a2d72.16",
                            "latlng": "-21.967559,-46.789681",
                            "label": "Slenderman - Av. Oscar Pirajá"
                        },
                        "id1524337766098": {
                            "guid": "da4c0196e45e44379e8669270eb99f6b.16",
                            "latlng": "-21.964781,-46.791671",
                            "label": "Unifae"
                        },
                        "id1524337769853": {
                            "guid": "b1c36ee707a44c46903b567cab490a6c.16",
                            "latlng": "-21.966085,-46.794702",
                            "label": "Grafite Arte De Rua"
                        },
                        "id1524337773145": {
                            "guid": "b375cb140280436482ee599753c97fb0.16",
                            "latlng": "-21.968265,-46.793758",
                            "label": "Agência Dos Correios - Central De Distribuição"
                        },
                        "id1524337780437": {
                            "guid": "810dfb73f10641a9a3b306e7abf8d13b.16",
                            "latlng": "-21.969313,-46.795301",
                            "label": "Estação Mercado José Trafani"
                        },
                        "id1524337791766": {
                            "guid": "a280e49705af40439ffdaf955c3095fa.11",
                            "latlng": "-21.969135,-46.79784",
                            "label": "Trib a Joaquim José de Oliveira"
                        },
                        "id1524337796339": {
                            "guid": "06da150c90d046b29b7aeeb30221dd7f.16",
                            "latlng": "-21.96938,-46.798386",
                            "label": "São José"
                        },
                        "id1524337802271": {
                            "guid": "4916b65e74ce49b19b8326b3b83746c9.16",
                            "latlng": "-21.969424,-46.799066",
                            "label": "Antiga Prefeitura"
                        },
                        "id1524337805180": {
                            "guid": "cf7a815a585e46dfbcd897fc2d55d6ae.16",
                            "latlng": "-21.969666,-46.799448",
                            "label": "Correio De São João Da Boa Vista"
                        },
                        "id1524337807677": {
                            "guid": "1d887c6c79d84d5e917b070627326a4d.16",
                            "latlng": "-21.96856,-46.796876",
                            "label": "O Espírito Livre"
                        },
                        "id1524337810779": {
                            "guid": "e08eb1fb33b5488bab5fe175146d46a8.16",
                            "latlng": "-21.96877,-46.796797",
                            "label": "Diretório Praça da Catedral"
                        },
                        "id1524337813812": {
                            "guid": "d29052e30a624908bc7599f7bf6cf42e.16",
                            "latlng": "-21.968281,-46.798472",
                            "label": "Sindicato Rural De São João Da Boa Vista "
                        },
                        "id1524337817399": {
                            "guid": "2c28bf9953a7475ba2a2e7d8a238f18d.16",
                            "latlng": "-21.967434,-46.799051",
                            "label": "Associação Comercial E Industrial De São João Da Boa Vista"
                        },
                        "id1524337821306": {
                            "guid": "aec21864c71e4966a0d904bcaa723f85.16",
                            "latlng": "-21.967086,-46.79951",
                            "label": "Prédio Do Senac"
                        },
                        "id1524337827086": {
                            "guid": "2abeec4abda54a0aa4fbd604dca621d9.16",
                            "latlng": "-21.965183,-46.798775",
                            "label": "Rosário Futebol Clube"
                        },
                        "id1524337832216": {
                            "guid": "0ef80626a6bb42ecb59056618656eeca.16",
                            "latlng": "-21.964969,-46.800494",
                            "label": "Arte De Rua - A Mulher Do Cocar"
                        },
                        "id1524337835761": {
                            "guid": "cbcfc9279ef446d8bbd53d5682dc9fd4.16",
                            "latlng": "-21.96293,-46.797616",
                            "label": "Igreja Nossa Senhora Do Rosário "
                        },
                        "id1524337845711": {
                            "guid": "c1dda737334241dfb195a03b363d5eca.16",
                            "latlng": "-21.959048,-46.801027",
                            "label": "Estádio Municipal Francisco Pedro Regini"
                        },
                        "id1524337864076": {
                            "guid": "3aaef707eae343678afc6828ab4177a6.16",
                            "latlng": "-21.966853,-46.811747",
                            "label": "Paróquia Imaculada Conceição "
                        },
                        "id1524337878144": {
                            "guid": "cc228b8aabd143ff921df14581f185ec.16",
                            "latlng": "-21.964945,-46.807536",
                            "label": "Legião Branca Mestre Jesus"
                        },
                        "id1524337881761": {
                            "guid": "3ba15f124e4143a1800e47b588b1baf2.16",
                            "latlng": "-21.96667,-46.805823",
                            "label": "Igreja Pentecostal "
                        },
                        "id1524337884161": {
                            "guid": "fffed2f0e341495684a0d808a3b654a3.16",
                            "latlng": "-21.96433,-46.805161",
                            "label": "Campanha Cuidador do Planeta 2009"
                        },
                        "id1524337887545": {
                            "guid": "7aebfbc0eabc419081ebcfb37fdf8900.16",
                            "latlng": "-21.96801,-46.802679",
                            "label": "Sociedade Esportiva Saojoanense"
                        },
                        "id1524337911717": {
                            "guid": "8c048410885a4f78a7a4204a1f9f032f.16",
                            "latlng": "-21.975975,-46.817173",
                            "label": "Congregação Crista no Brasil "
                        },
                        "id1524337914987": {
                            "guid": "69c5f39804674c35b347746b519c84c2.16",
                            "latlng": "-21.971448,-46.819535",
                            "label": "Caixa d'água Jardim Novo Horizonte"
                        },
                        "id1524337930410": {
                            "guid": "c84dcf107c34476db732977c463fd8c9.16",
                            "latlng": "-21.974218,-46.804221",
                            "label": "Estádio Getúlio Vargas Filho"
                        },
                        "id1524337933672": {
                            "guid": "571357b50c2e43bfaf0d0e30d4389103.16",
                            "latlng": "-21.967243,-46.786871",
                            "label": "Fonte Santo André "
                        },
                        "id1524337942416": {
                            "guid": "e76b590fdd8a4d9584d4e44df45c581a.16",
                            "latlng": "-21.974994,-46.776976",
                            "label": "Playground De Madeira"
                        },
                        "id1524337948684": {
                            "guid": "3fde6055826a418495915d4b51151f57.16",
                            "latlng": "-21.97429,-46.782409",
                            "label": "Grafite Expresso São João "
                        },
                        "id1524337952511": {
                            "guid": "dd830d76c52945c2a080101008806f1c.16",
                            "latlng": "-21.975842,-46.787684",
                            "label": "Parquinho Jardim Leonor "
                        },
                        "id1524337955272": {
                            "guid": "d92ffcc3cda14bedab75559ec21c8063.16",
                            "latlng": "-21.976189,-46.787876",
                            "label": "Centro De Lazer Jardim Leonor"
                        },
                        "id1524337957916": {
                            "guid": "b33c12526ef94ca5b2783ee262f9f088.16",
                            "latlng": "-21.974315,-46.784195",
                            "label": "Igreja Adventista Do Sétimo Dia"
                        },
                        "id1524337983869": {
                            "guid": "68862d8c67c34638b76d70c8bd1d83d0.16",
                            "latlng": "-21.979108,-46.809346",
                            "label": "Grafite Carro Possante"
                        },
                        "id1524337987607": {
                            "guid": "81d1a4aa358046fe99f6b92ef654ac67.16",
                            "latlng": "-21.979773,-46.810784",
                            "label": "Paróquia N.S.de Fátima "
                        },
                        "id1524338010010": {
                            "guid": "caa6e35bf1f44286b4cdfb42bf29f4c6.16",
                            "latlng": "-21.988528,-46.792169",
                            "label": "Segunda Igreja Batista de São João da Boa Vista"
                        },
                        "id1524338013163": {
                            "guid": "7c07fb3a3da74451b7fbc6a5822a75d1.16",
                            "latlng": "-21.98813,-46.791115",
                            "label": "Igreja da Palavra de Deus"
                        },
                        "id1524338020004": {
                            "guid": "08fadaca9ade44949113742f612392f1.16",
                            "latlng": "-21.989263,-46.79312",
                            "label": "Rodoviária De São João da Boa Vista"
                        },
                        "id1524338022595": {
                            "guid": "c42e65bc5bd64facaa5654cad4de1fda.16",
                            "latlng": "-21.988981,-46.793518",
                            "label": "Praça da Maçonaria"
                        },
                        "id1524338062290": {
                            "guid": "63e24d6e8c834fa7b54047a3a90a4b98.16",
                            "latlng": "-21.998271,-46.777111",
                            "label": "Igreja Universal "
                        },
                        "id1524338064496": {
                            "guid": "27ad33a91b5e41fe9036026a5d6cd759.16",
                            "latlng": "-21.999364,-46.776903",
                            "label": "Paróquia Nossa Senhora Das Dores"
                        },
                        "id1524338067550": {
                            "guid": "72afa2c8da1b4eaea1509f4e3408d543.16",
                            "latlng": "-22.003624,-46.779177",
                            "label": "Igreja Do Evangelho Quadrangular"
                        },
                        "id1524338069893": {
                            "guid": "6ebca8ff81a446438412daebc0fec8ef.16",
                            "latlng": "-22.004188,-46.77914",
                            "label": "Igreja Assembleia De Deus M. Belém "
                        },
                        "id1524338072785": {
                            "guid": "6756a2f6a2d24e30a49612de714625aa.16",
                            "latlng": "-22.005408,-46.778966",
                            "label": "Igreja Pentecostal De Milagres"
                        },
                        "id1524338078474": {
                            "guid": "de68945ee88b45848f487e2d2a879945.16",
                            "latlng": "-22.008502,-46.7793",
                            "label": "Igreja Evangélica Assembleia De Deus Ministério De Belem"
                        },
                        "id1524338091734": {
                            "guid": "281af7377cd34dcbb9c4b293f54e867b.16",
                            "latlng": "-22.006739,-46.784096",
                            "label": "Igreja Lucas Teixeira "
                        },
                        "id1524338094859": {
                            "guid": "e1435733f526481bbcfa580f851531f2.16",
                            "latlng": "-22.005278,-46.784661",
                            "label": "Caixa D'água Jd. Lucas Teixeira"
                        },
                        "id1524338097827": {
                            "guid": "6f7f724524554306a77caa889b3ee2b6.16",
                            "latlng": "-22.004037,-46.785592",
                            "label": "Igreja Assembleia De Deus Missionaria"
                        },
                        "id1524338110042": {
                            "guid": "ed49e5af97d74c9a9205eefedd81bd42.16",
                            "latlng": "-22.003214,-46.782801",
                            "label": "Igreja Pentecostal Deus É Amor"
                        },
                        "id1524338114206": {
                            "guid": "3d25e988c92f449ea52bc2fb255083bb.16",
                            "latlng": "-22.003026,-46.782306",
                            "label": "Salão Do Reino Das Testemunhas De Jeová "
                        },
                        "id1524338141758": {
                            "guid": "214976250df84ccda17e6c225770c743.16",
                            "latlng": "-22.003075,-46.781608",
                            "label": "Avenida Prof. Isette Corrêa Fontão"
                        },
                        "id1524338144690": {
                            "guid": "4f4d33d1a7d44b4fad700a2dc6c65af8.16",
                            "latlng": "-22.002978,-46.781077",
                            "label": "Assembleia De Deus Madureira"
                        },
                        "id1524338176606": {
                            "guid": "7c4343ee385c45cfa8dd57754854296f.16",
                            "latlng": "-21.974895,-46.810964",
                            "label": "Igreja Salão do Reino das Testemunhas de Jeová"
                        },
                        "id1524338188325": {
                            "guid": "aedac897d2074c5f86595535ee0de24d.16",
                            "latlng": "-21.980337,-46.80972",
                            "label": "Quadra Poliesportiva Nossa Senhora de Fátima"
                        },
                        "id1524338215128": {
                            "guid": "399218d0a6f74d14bd527ee25f000413.16",
                            "latlng": "-21.963602,-46.794764",
                            "label": "A Menina E Os Pássaros"
                        },
                        "id1524338218957": {
                            "guid": "0807cab49c6b4d368708894cdab6ea6b.16",
                            "latlng": "-21.963897,-46.796195",
                            "label": "Beija Flor"
                        },
                        "id1524338244507": {
                            "guid": "13619234bb7240308f3a406aa62f6979.16",
                            "latlng": "-21.972172,-46.792082",
                            "label": "Igreja Do São Lázaro "
                        },
                        "id1524338299158": {
                            "guid": "0c4e66cb84d54387a04df4951e980771.16",
                            "latlng": "-21.972115,-46.774252",
                            "label": "Pista de Exercicios - Marco 2 - 1000 Metros"
                        },
                        "id1524338302353": {
                            "guid": "d6bf14cd4fd74a25b9307bbd4da54650.16",
                            "latlng": "-21.968511,-46.775355",
                            "label": "Novo Fórum São João da Boa Vista "
                        },
                        "id1524338306991": {
                            "guid": "19166876aadf484aa4f19fd5b3821338.16",
                            "latlng": "-21.968483,-46.757656",
                            "label": "Lions  Club De São João da Boa Vista "
                        },
                        "id1524338309151": {
                            "guid": "a4cf1eae6a464799a7c3c72c67127cb8.16",
                            "latlng": "-21.9686,-46.755324",
                            "label": "Dom Tomás Vaqueiro"
                        },
                        "id1524338325676": {
                            "guid": "51e464220dae45caae1cf191d140a435.16",
                            "latlng": "-21.967181,-46.745743",
                            "label": "Igreja O Mover De Deus"
                        },
                        "id1524338336492": {
                            "guid": "79e8c48a50f245c8a1bed7b3514b0bab.16",
                            "latlng": "-21.963234,-46.742256",
                            "label": "Congregação Cristã No Brasil "
                        },
                        "id1524338340360": {
                            "guid": "e55cec80c627494aa7336f5003a042bc.16",
                            "latlng": "-21.964094,-46.742273",
                            "label": "Parquinho Do Jardim Pousada Do Sol"
                        },
                        "id1524338342576": {
                            "guid": "a7d2387b1efa4418b1e3b9a7ca69e57e.16",
                            "latlng": "-21.964454,-46.740189",
                            "label": "Igreja Do Evangelho Quadrangular"
                        },
                        "id1524421868999": {
                            "guid": "a7a2c47fad3b4953a73e87a5ea5f026c.16",
                            "latlng": "-21.976091,-46.812895",
                            "label": "Igreja Petencostal Deus é Amor."
                        },
                        "id1524428243208": {
                            "guid": "109debfa3232450eb2bfe032b8fae013.16",
                            "latlng": "-21.957181,-46.803356",
                            "label": "Centro Espírita Universal "
                        },
                        "id1524428282320": {
                            "guid": "e1720e3d0cae4e3e96c483ea05c83a14.16",
                            "latlng": "-21.955682,-46.796744",
                            "label": "Salão Do Reino Das Testemunhas De Jeová "
                        },
                        "id1524428285632": {
                            "guid": "4f92912ec45147a1900fc4d1427f7e4b.16",
                            "latlng": "-21.955498,-46.798288",
                            "label": "Igreja Assembleia De Deus Ministério De Madureira"
                        },
                        "id1524428303888": {
                            "guid": "b3a53d2783174fb0aedd09ac79fa99ef.16",
                            "latlng": "-21.953516,-46.794689",
                            "label": "Igreja Batista Ágape "
                        },
                        "id1524429073365": {
                            "guid": "e9cb4fa094f64b049e138c676fbfdfc6.16",
                            "latlng": "-21.98058,-46.809446",
                            "label": "Academia ao Ar Livre"
                        },
                        "id1524429084754": {
                            "guid": "af6fad288cd54f65979235dc711c6b55.16",
                            "latlng": "-21.978185,-46.813871",
                            "label": "Igreja Evangélica Assembleia de Deus"
                        }
                    }
                }
            }
        }




    );