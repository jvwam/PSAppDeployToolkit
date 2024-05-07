"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[9877],{2013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(6070),a=t(7468);const i={id:"Install-SCCMSoftwareUpdates",title:"Install-SCCMSoftwareUpdates",description:'Help page for the "Install-SCCMSoftwareUpdates" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1},o=void 0,l={id:"reference/functions/Install-SCCMSoftwareUpdates",title:"Install-SCCMSoftwareUpdates",description:'Help page for the "Install-SCCMSoftwareUpdates" command',source:"@site/docs/reference/functions/Install-SCCMSoftwareUpdates.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/Install-SCCMSoftwareUpdates",permalink:"/docs/reference/functions/Install-SCCMSoftwareUpdates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Install-SCCMSoftwareUpdates",title:"Install-SCCMSoftwareUpdates",description:'Help page for the "Install-SCCMSoftwareUpdates" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1},sidebar:"reference",previous:{title:"Install-MSUpdates",permalink:"/docs/reference/functions/Install-MSUpdates"},next:{title:"Invoke-HKCURegistrySettingsForAllUsers",permalink:"/docs/reference/functions/Invoke-HKCURegistrySettingsForAllUsers"}},r={},d=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-SoftwareUpdatesScanWaitInSeconds",id:"-softwareupdatesscanwaitinseconds",level:3},{value:"-WaitForPendingUpdatesTimeout",id:"-waitforpendingupdatestimeout",level:3},{value:"-ContinueOnError",id:"-continueonerror",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"None",id:"none",level:3},{value:"You cannot pipe objects to this function.",id:"you-cannot-pipe-objects-to-this-function",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"None",id:"none-1",level:3},{value:"This function does not return any objects.",id:"this-function-does-not-return-any-objects",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,s.jsx)(n.p,{children:"Scans for outstanding SCCM updates to be installed and installs the pending updates."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Install-SCCMSoftwareUpdates [[-SoftwareUpdatesScanWaitInSeconds] <Int32>]\n [[-WaitForPendingUpdatesTimeout] <TimeSpan>] [[-ContinueOnError] <Boolean>] [<CommonParameters>]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,s.jsx)(n.p,{children:"Scans for outstanding SCCM updates to be installed and installs the pending updates."}),"\n",(0,s.jsx)(n.p,{children:"Only compatible with SCCM 2012 Client or higher.\nThis function can take several minutes to run."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Install-SCCMSoftwareUpdates\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,s.jsx)(n.h3,{id:"-softwareupdatesscanwaitinseconds",children:"-SoftwareUpdatesScanWaitInSeconds"}),"\n",(0,s.jsx)(n.p,{children:"The amount of time to wait in seconds for the software updates scan to complete.\nDefault is: 180 seconds."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Type: Int32\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 1\nDefault value: 180\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,s.jsx)(n.h3,{id:"-waitforpendingupdatestimeout",children:"-WaitForPendingUpdatesTimeout"}),"\n",(0,s.jsx)(n.p,{children:"The amount of time to wait for missing and pending updates to install before exiting the function.\nDefault is: 45 minutes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Type: TimeSpan\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 2\nDefault value: $(New-TimeSpan -Minutes 45)\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,s.jsx)(n.h3,{id:"-continueonerror",children:"-ContinueOnError"}),"\n",(0,s.jsx)(n.p,{children:"Continue if an error is encountered.\nDefault is: $true."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Type: Boolean\nParameter Sets: (All)\nAliases:\n\nRequired: False\nPosition: 3\nDefault value: True\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,s.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,s.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,s.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,s.jsx)(n.h3,{id:"none",children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"you-cannot-pipe-objects-to-this-function",children:"You cannot pipe objects to this function."}),"\n",(0,s.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,s.jsx)(n.h3,{id:"none-1",children:"None"}),"\n",(0,s.jsx)(n.h3,{id:"this-function-does-not-return-any-objects",children:"This function does not return any objects."}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,s.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7468:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(758);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);