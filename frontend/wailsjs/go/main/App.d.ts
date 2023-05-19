// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {burpSuite} from '../models';
import {twj} from '../models';
import {main} from '../models';

export function Brute():Promise<string>;

export function Decoder(arg1:string,arg2:string):Promise<string>;

export function Fuzz(arg1:string,arg2:Array<string>,arg3:string):Promise<string>;

export function FuzzStop():Promise<void>;

export function GetAttackDump(arg1:string,arg2:number):Promise<burpSuite.HTTPBody>;

export function GetBurpSettings():Promise<burpSuite.Setting>;

export function GetHistoryDump(arg1:number):Promise<burpSuite.HTTPBody>;

export function Intercept(arg1:boolean,arg2:boolean,arg3:string):Promise<number>;

export function InterceptSend(arg1:string):Promise<void>;

export function Intruder(arg1:string,arg2:string,arg3:Array<string>,arg4:Array<string>,arg5:string,arg6:string):Promise<void>;

export function Parser(arg1:string):Promise<twj.Jwt>;

export function Proxy(arg1:string):Promise<main.Message>;

export function Raw(arg1:string,arg2:string,arg3:string):Promise<burpSuite.HTTPBody>;

export function SendToIntruder(arg1:number):Promise<void>;

export function SendToRepeater(arg1:number):Promise<void>;

export function Settings(arg1:burpSuite.SettingUI):Promise<string>;

export function Swagger(arg1:string):Promise<void>;

export function TaskList(arg1:string):Promise<{[key: string]: string}>;

export function Verify(arg1:string,arg2:string):Promise<main.Message>;
