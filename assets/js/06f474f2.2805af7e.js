"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[8742],{8590:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=l(6070),i=l(7468);const s={id:"Remove-FileFromUserProfiles",title:"Remove-FileFromUserProfiles",description:'Help page for the "Remove-FileFromUserProfiles" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1},t=void 0,a={id:"reference/functions/Remove-FileFromUserProfiles",title:"Remove-FileFromUserProfiles",description:'Help page for the "Remove-FileFromUserProfiles" command',source:"@site/docs/reference/functions/Remove-FileFromUserProfiles.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Remove-FileFromUserProfiles",permalink:"/docs/reference/functions/Remove-FileFromUserProfiles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Remove-FileFromUserProfiles",title:"Remove-FileFromUserProfiles",description:'Help page for the "Remove-FileFromUserProfiles" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1},sidebar:"reference",previous:{title:"Remove-File",permalink:"/docs/reference/functions/Remove-File"},next:{title:"Remove-Folder",permalink:"/docs/reference/functions/Remove-Folder"}},o={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"Path",id:"path",level:3},{value:"LiteralPath",id:"literalpath",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Path",id:"-path",level:3},{value:"-LiteralPath",id:"-literalpath",level:3},{value:"-Recurse",id:"-recurse",level:3},{value:"-ExcludeNTAccount",id:"-excludentaccount",level:3},{value:"-ExcludeSystemProfiles",id:"-excludesystemprofiles",level:3},{value:"-ExcludeServiceProfiles",id:"-excludeserviceprofiles",level:3},{value:"-ExcludeDefaultUser",id:"-excludedefaultuser",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not generate any output.",id:"this-function-does-not-generate-any-output",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,r.jsx)(n.p,{children:"Removes one or more items from each user profile on the system."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,r.jsx)(n.h3,{id:"path",children:"Path"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"Remove-FileFromUserProfiles [-Path] <String[]> [-Recurse] [-ExcludeNTAccount <String[]>]\n [-ExcludeSystemProfiles <Boolean>] [-ExcludeServiceProfiles <Boolean>] [-ExcludeDefaultUser]\n [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"literalpath",children:"LiteralPath"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"Remove-FileFromUserProfiles [-LiteralPath] <String[]> [-Recurse] [-ExcludeNTAccount <String[]>]\n [-ExcludeSystemProfiles <Boolean>] [-ExcludeServiceProfiles <Boolean>] [-ExcludeDefaultUser]\n [-ContinueOnError <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,r.jsx)(n.p,{children:"Removes one or more items from each user profile on the system."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:'Remove-FileFromUserProfiles -Path "AppData\\Roaming\\MyApp\\config.txt"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:'Remove-FileFromUserProfiles -Path "AppData\\Local\\MyApp" -Recurse\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,r.jsx)(n.h3,{id:"-path",children:"-Path"}),"\n",(0,r.jsx)(n.p,{children:"Specifies the path to append to the root of the user profile to be resolved.\nThe value of Path will accept wildcards.\nWill accept an array of values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: String[]\nParameter Sets: Path\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-literalpath",children:"-LiteralPath"}),"\n",(0,r.jsx)(n.p,{children:"Specifies the path to append to the root of the user profile to be resolved.\nThe value of LiteralPath is used exactly as it is typed; no characters are interpreted as wildcards.\nWill accept an array of values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: String[]\nParameter Sets: LiteralPath\nAliases:\n\nRequired: True\nPosition: 1\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-recurse",children:"-Recurse"}),"\n",(0,r.jsx)(n.p,{children:"Deletes the files in the specified location(s) and in all child items of the location(s)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-excludentaccount",children:"-ExcludeNTAccount"}),"\n",(0,r.jsx)(n.p,{children:"Specify NT account names in Domain\\Username format to exclude from the list of user profiles."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: String[]\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: None\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-excludesystemprofiles",children:"-ExcludeSystemProfiles"}),"\n",(0,r.jsx)(n.p,{children:"Exclude system profiles: SYSTEM, LOCAL SERVICE, NETWORK SERVICE.\nDefault is: $true."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-excludeserviceprofiles",children:"-ExcludeServiceProfiles"}),"\n",(0,r.jsx)(n.p,{children:"Exclude service profiles where NTAccount begins with NT SERVICE.\nDefault is: $true."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-excludedefaultuser",children:"-ExcludeDefaultUser"}),"\n",(0,r.jsx)(n.p,{children:"Exclude the Default User.\nDefault is: $false."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,r.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,r.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,r.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,r.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,r.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,r.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,r.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,r.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,r.jsx)(n.h3,{id:"this-function-does-not-generate-any-output",children:"This function does not generate any output."}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,r.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7468:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>a});var r=l(758);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);