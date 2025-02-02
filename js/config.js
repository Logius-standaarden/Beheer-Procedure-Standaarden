var respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2023-01-31",
  publishVersion: "0.0.1",
  title: "Beheer Procedure Standaarden",
  // previousPublishVersion: "(none)",
  content: {"ch01": "informative", "ch02": "", "mermaid": ""},
  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
  postProcess: [window.respecMermaid.createFigures]
};
