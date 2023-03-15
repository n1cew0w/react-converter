import React, {ReactElement, ReactNode} from "react";

export interface ValuteData {
    CharCode?: string
    Value: number
    Previous: number
    ID: string
    Name: string
    Nominal: number
    NumCode: string
}


export interface Data {
    Date: string
    PreviousDate: string
    PreviousURL: string
    Timestamp: string
    Valute: Map


}

export interface Map{
    Valutes: Record<string, ValuteData> | React.ReactNode

}


export interface ChildrenProps{
    children: React.ReactNode
}


