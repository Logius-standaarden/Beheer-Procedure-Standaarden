import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2023-01-31",
  publishVersion: "0.0.1",
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/Beheer-Procedure-Standaarden/",
  prevVersion: [],
  title: "Beheer Procedure Standaarden",
  editors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/Beheer-Procedure-Standaarden",
});
