import { useTranslations } from "next-intl";

export const navLinks = () => {
  const t = useTranslations("Header");

  return [
    { id: 1, to: "/", title: t("services") },
    { id: 2, to: "/", title: t("banking") },
    { id: 3, to: "/", title: t("about") },
    { id: 4, to: "/", title: t("blog") },
    { id: 5, to: "/", title: t("contact") }
  ];
};

export const experience = () => {
  const t = useTranslations("Main");

  return [
    { id: 1, text: t("years"), subTexts: t("yearsText") },
    { id: 2, text: t("network"), subTexts: t("networkText") },
    { id: 3, text: t("clients"), subTexts: t("clientsText") },
    { id: 4, text: t("project"), subTexts: t("projectText") }
  ];
};

export const expertise = () => {
  const t = useTranslations("expertiseSection");

  return [
    { id: 1, image: "/assets/icons/CaseIcon.svg", alt: "Case Icon", title: t("SectionFirstTexts.expertiseTitle"), text: t("SectionFirstTexts.expertiseText") },
    { id: 2, image: "/assets/icons/IdeaIcon.svg", alt: "Idea Icon", title: t("SectionSecondTexts.expertiseTitle"), text: t("SectionSecondTexts.expertiseText") },
    { id: 3, image: "/assets/icons/FinanceLogo.svg", alt: "Finance Icon", title: t("SectionThirdTexts.expertiseTitle"), text: t("SectionThirdTexts.expertiseText") },
    { id: 4, image: "/assets/icons/GlobalIcon.svg", alt: "Global Icon", title: t("SectionFourTexts.expertiseTitle"), text: t("SectionFourTexts.expertiseText") }
  ];
};

export const serveSection = () => {
  const t = useTranslations("serveSection");

  return [
    { id: 1, icon: "◆", text: t("SectionSecondTexts.text1") },
    { id: 2, icon: "◆", text: t("SectionSecondTexts.text2") },
    { id: 3, icon: "◆", text: t("SectionSecondTexts.text3") },
    { id: 4, icon: "◆", text: t("SectionSecondTexts.text4") },
    { id: 5, icon: "◆", text: t("SectionSecondTexts.text5") },
    { id: 6, icon: "◆", text: t("SectionSecondTexts.text6") },
    { id: 7, icon: "◆", text: t("SectionSecondTexts.text7") },
    { id: 8, icon: "◆", text: t("SectionSecondTexts.text8") },
    { id: 9, icon: "◆", text: t("SectionSecondTexts.text9") },
    { id: 10, icon: "◆", text: t("SectionSecondTexts.text10") },
    { id: 11, icon: "◆", text: t("SectionSecondTexts.text11") },
    { id: 12, icon: "◆", text: t("SectionSecondTexts.text12") }
  ];
};

// export const servicesSection = [
//   { id: 1, title: "Company registration", text: "We ensure the processes of setting up and maintenance of a company, as well as search for local personnel, sale of ready-made companies, and liquidations.", to: "/" },
//   { id: 2, title: "Corporate accounts", text: "We assist in opening both bank and EMI accounts, as well as getting corporate cards and even LEI numbers for investors.", to: "/" },
//   { id: 3, title: "Obtaining Licenses", text: "Some businesses are under specific state regulations. We accompany you while getting Gaming licenses, EMI licenses and Crypto licenses.", to: "/" },
//   { id: 4, title: "Payment processing", text: "The full scope of services relating to merchant account opening with reliable payment systems, PCI DSS certifications, chargeback prevention and KYC verifications for your end-users.", to: "/" },
//   { id: 5, title: "Accounting & Audit", text: "We take all the hassle of preparation and submission of reports, accounting, and audit procedures. We keep an eye on deadlines for VAT, OSS, and VIES periods to let you concentrate on business.", to: "/" },
//   { id: 6, title: "Contract review and drafting", text: "No business can operate without proper contracts for every aspect – Documents for Websites, NDA, Marketing Agreements, Consulting Agreements, Software Development Agreements, License Agreements, etc.", to: "/" },
//   { id: 7, title: "Corporate Structuring", text: "We can enhance your current corporate structure and offer tax planning & asset protection measures.", to: "/" },
//   { id: 8, title: "IP & TM registration", text: "Intellectual property is a valuable asset for any IT company. With our help, you can protect your trademark or logo in your country or around the world.", to: "/" }
// ]

export const servicesSection = () => {
  const t = useTranslations("servicesSection");

  return [
    { id: 1, title: t("Services.title1"), text: t("Services.text1"), to: "/" },
    { id: 2, title: t("Services.title2"), text: t("Services.text2"), to: "/" },
    { id: 3, title: t("Services.title3"), text: t("Services.text3"), to: "/" },
    { id: 4, title: t("Services.title4"), text: t("Services.text4"), to: "/" },
    { id: 5, title: t("Services.title5"), text: t("Services.text5"), to: "/" },
    { id: 6, title: t("Services.title6"), text: t("Services.text6"), to: "/" },
    { id: 7, title: t("Services.title7"), text: t("Services.text7"), to: "/" },
    { id: 8, title: t("Services.title8"), text: t("Services.text8"), to: "/" }
  ];
};

export const bankingSection = () => {
  const t = useTranslations("bankingSection")

  return [
    { id: 1, icon: "◆", text: t("subText1") },
    { id: 2, icon: "◆", text: t("subText2") },
    { id: 3, icon: "◆", text: t("subText3") },
    { id: 4, icon: "◆", text: t("subText4") }
  ]
};

export const processSection = () => {
  const t = useTranslations("processSection");

  return [
    { id: 1, count: "1", title: t("process.title1"), text: t("process.text1"), to: "/" },
    { id: 2, count: "2", title: t("process.title2"), text: t("process.text2"), to: "/" },
    { id: 3, count: "3", title: t("process.title3"), text: t("process.text3"), to: "/" },
    { id: 4, count: "4", title: t("process.title4"), text: t("process.text4"), to: "/" },
    { id: 5, count: "5", title: t("process.title5"), text: t("process.text5"), to: "/" },
    { id: 6, count: "6", title: t("process.title6"), text: t("process.text6"), to: "/" }
  ];
};

export const benefitsSection = () => {
  const t = useTranslations("benefitsSection");

  return [
    { id: 1, img: "/assets/icons/TeamIcon.svg", title: t("Benefits.title1"), text: t("Benefits.text1") },
    { id: 2, img: "/assets/icons/StrategyIcon.svg", title: t("Benefits.title2"), text: t("Benefits.text2") },
    { id: 3, img: "/assets/icons/EffectiveIcon.svg", title: t("Benefits.title3"), text: t("Benefits.text3") },
    { id: 4, img: "/assets/icons/TargetIcon.svg", title: t("Benefits.title4"), text: t("Benefits.text4") }
  ]
};