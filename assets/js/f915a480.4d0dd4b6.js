"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[2658],{9520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(1527),i=r(3883);const s={id:"Get-FreeDiskSpace",title:"Get-FreeDiskSpace",description:'Help page for the "Get-FreeDiskSpace" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},o=void 0,l={id:"reference/functions/Get-FreeDiskSpace",title:"Get-FreeDiskSpace",description:'Help page for the "Get-FreeDiskSpace" command',source:"@site/docs/reference/functions/Get-FreeDiskSpace.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Get-FreeDiskSpace",permalink:"/docs/reference/functions/Get-FreeDiskSpace",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"Get-FreeDiskSpace",title:"Get-FreeDiskSpace",description:'Help page for the "Get-FreeDiskSpace" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Get-FileVersion",permalink:"/docs/reference/functions/Get-FileVersion"},next:{title:"Get-HardwarePlatform",permalink:"/docs/reference/functions/Get-HardwarePlatform"}},a={},c=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-Drive",id:"-drive",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.Double",id:"systemdouble",level:3},{value:"Returns the free disk space in MB",id:"returns-the-free-disk-space-in-mb",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,t.jsx)(n.p,{children:"Retrieves the free disk space in MB on a particular drive (defaults to system drive)"}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Get-FreeDiskSpace [[-Drive] <String>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,t.jsx)(n.p,{children:"Retrieves the free disk space in MB on a particular drive (defaults to system drive)"}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Get-FreeDiskSpace -Drive 'C:'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,t.jsx)(n.h3,{id:"-drive",children:"-Drive"}),"\n",(0,t.jsx)(n.p,{children:"Drive to check free disk space on"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: $envSystemDrive\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,t.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,t.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,t.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,t.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,t.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,t.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,t.jsx)(n.h3,{id:"systemdouble",children:"System.Double"}),"\n",(0,t.jsx)(n.h3,{id:"returns-the-free-disk-space-in-mb",children:"Returns the free disk space in MB"}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,t.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3883:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var t=r(959);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);