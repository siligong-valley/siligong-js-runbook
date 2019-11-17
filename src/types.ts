// presenter -----------------------------------
export enum PresenterKeyType {
    satvikSharma = "satvikSharma",
    chrisParton = "chrisParton",
}

export interface PresenterType {
    name: string
    job: string
    portrait: string
}

export type PresentersDataType = {
    [propName in PresenterKeyType]: PresenterType
}

// sponsor -----------------------------------
export enum SponsorKeyType {
    easyAgile = "easyAgile",
    accelo = "accelo",
}

export interface SponsorType {
    name: string
    logo: string
}

export type SponsorsDataType = {
    [propName in SponsorKeyType]: SponsorType
}

// bar -----------------------------------
export enum BarKeyType {
    humber = "humber",
}

export interface BarType {
    name: string
    logo: string
}

export type BarsDataType = {
    [propName in BarKeyType]: BarType
}