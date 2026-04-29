export interface CNAE {
  code: string;
  description: string;
  simples: boolean;
  mei: boolean;
  annex?: string;
  taxRate?: string;
}

export const popularCNAEs: CNAE[] = [
  // == TECNOLOGIA E DIGITAL ==
  { code: "6201-5/01", description: "Desenvolvimento de programas de computador sob encomenda", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "6202-3/00", description: "Desenvolvimento e licenciamento de programas de computador customizáveis", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "6204-0/00", description: "Consultoria em tecnologia da informação", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "6319-4/00", description: "Portais, provedores de conteúdo e outros serviços de informação na internet (Youtubers e Influenciadores)", simples: true, mei: false, annex: "III", taxRate: "6%" },
  { code: "7311-4/00", description: "Agências de publicidade e marketing digital", simples: true, mei: false, annex: "III", taxRate: "6%" },
  { code: "7319-0/02", description: "Promoção de vendas (Afiliados e Infoprodutos)", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "8599-6/04", description: "Treinamento em desenvolvimento profissional e gerencial (Cursos Online/Mentorias)", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "5819-1/00", description: "Edição de cadastros, listas e de outros produtos gráficos (E-books)", simples: true, mei: true, annex: "I", taxRate: "4%" },
  
  // == SAÚDE E ESTÉTICA ==
  { code: "8630-5/03", description: "Atividade médica ambulatorial restrita a consultas", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "8630-5/04", description: "Atividade odontológica", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "8650-0/03", description: "Atividades de psicologia e psicanálise", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "8650-0/04", description: "Atividades de fisioterapia", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "8650-0/02", description: "Atividades de fonoaudiologia", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "9602-5/02", description: "Atividades de estética e outros serviços de cuidados com a beleza", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "9602-5/01", description: "Cabeleireiros, manicure e pedicure", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "8650-0/06", description: "Atividades de fonoaudiologia", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },

  // == ENGENHARIA E ARQUITETURA ==
  { code: "7111-1/00", description: "Serviços de arquitetura", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "7112-0/00", description: "Serviços de engenharia", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "7119-7/03", description: "Serviços de desenho técnico relacionados à arquitetura e engenharia", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },

  // == PROFISSIONAIS LIBERAIS E CONSULTORIA ==
  { code: "6911-7/01", description: "Serviços advocatícios", simples: true, mei: false, annex: "IV", taxRate: "4,5%" },
  { code: "6920-6/01", description: "Atividades de contabilidade", simples: true, mei: false, annex: "III", taxRate: "6%" },
  { code: "7020-4/00", description: "Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "7420-0/01", description: "Atividades de produção de fotografias, exceto aérea e submarina", simples: true, mei: true, annex: "III", taxRate: "6%" },

  // == COMÉRCIO E E-COMMERCE ==
  { code: "4781-4/00", description: "Comércio varejista de artigos do vestuário e acessórios", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "4751-2/01", description: "Comércio varejista especializado de equipamentos e suprimentos de informática", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "4712-1/00", description: "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "4772-5/00", description: "Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "4789-0/99", description: "Comércio varejista de outros produtos não especificados anteriormente (Dropshipping/E-commerce geral)", simples: true, mei: false, annex: "I", taxRate: "4%" },

  // == ALIMENTAÇÃO E SERVIÇOS ==
  { code: "5611-2/01", description: "Restaurantes e similares", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "5611-2/03", description: "Lanchonetes, casas de chá, de sucos e similares", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "5620-1/04", description: "Fornecimento de alimentos preparados preponderantemente para consumo domiciliar (Delivery)", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "1091-1/02", description: "Fabricação de produtos de padaria e confeitaria com predominância de produção própria", simples: true, mei: true, annex: "II", taxRate: "4,5%" },

  // == MANUTENÇÃO, OBRAS E TRANSPORTES ==
  { code: "4930-2/01", description: "Transporte rodoviário de carga, exceto produtos perigosos e mudanças, municipal", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "4930-2/02", description: "Transporte rodoviário de carga, exceto produtos perigosos e mudanças, intermunicipal, interestadual e internacional", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "4399-1/03", description: "Obras de alvenaria", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "4321-9/00", description: "Instalação e manutenção elétrica", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "4322-7/03", description: "Instalação e manutenção de sistemas centrais de ar condicionado, de ventilação e refrigeração", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "4520-0/01", description: "Serviços de manutenção e reparação mecânica de veículos automotores (Oficinas)", simples: true, mei: true, annex: "III", taxRate: "6%" },

  // == PET SHOPS E VETERINÁRIA ==
  { code: "7500-1/00", description: "Atividades veterinárias", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "4789-0/04", description: "Comércio varejista de animais vivos e de artigos e alimentos para animais de estimação", simples: true, mei: true, annex: "I", taxRate: "4%" },
  { code: "9609-2/08", description: "Higiene e embelezamento de animais domésticos (Banho e Tosa)", simples: true, mei: true, annex: "III", taxRate: "6%" },

  // == OUTROS SERVIÇOS COMUNS DE MICROEMPRESAS ==
  { code: "9313-1/00", description: "Atividades de condicionamento físico (Academias e Personal Trainer)", simples: true, mei: false, annex: "V ou III (Fator R)", taxRate: "6% a 15,5%" },
  { code: "8211-3/00", description: "Serviços combinados de escritório e apoio administrativo (BPO/Assistente Virtual)", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "8121-4/00", description: "Limpeza em prédios e em domicílios", simples: true, mei: true, annex: "IV", taxRate: "4,5%" },
  { code: "8230-0/01", description: "Serviços de organização de feiras, congressos, exposições e festas", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "7911-2/00", description: "Agências de viagens", simples: true, mei: true, annex: "III", taxRate: "6%" },
  { code: "1813-0/01", description: "Impressão de material para uso publicitário", simples: true, mei: true, annex: "II", taxRate: "4,5%" }
];
