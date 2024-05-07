"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[9889],{1307:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=s(6070),l=s(7468);const n={sidebar_position:1,sidebar_label:"Exit Codes",title:"Exit Codes",description:"PSAppDeployToolkit has a number of internal exit codes for any issues that may occur.",slug:"/exit-codes",tags:["Exit Codes","Reference"]},o="Exit Codes",r={id:"reference/exit-codes",title:"Exit Codes",description:"PSAppDeployToolkit has a number of internal exit codes for any issues that may occur.",source:"@site/docs/reference/exit-codes.mdx",sourceDirName:"reference",slug:"/exit-codes",permalink:"/docs/exit-codes",draft:!1,unlisted:!1,tags:[{label:"Exit Codes",permalink:"/docs/tags/exit-codes"},{label:"Reference",permalink:"/docs/tags/reference"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Exit Codes",title:"Exit Codes",description:"PSAppDeployToolkit has a number of internal exit codes for any issues that may occur.",slug:"/exit-codes",tags:["Exit Codes","Reference"]},sidebar:"reference",previous:{title:"Reference",permalink:"/docs/reference"},next:{title:"Variables",permalink:"/docs/variables"}},d={},c=[];function x(e){const t={code:"code",em:"em",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"exit-codes",children:"Exit Codes"}),"\n",(0,i.jsx)(t.p,{children:"PSAppDeployToolkit uses pre-defined Exit Codes to indicate the success or failure of a deployment and can be used to control the flow of your deployment logic, or just to understand what happened during a deployment."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Exit Code"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60000-68999"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Reserved for built-in exit codes in ",(0,i.jsx)(t.em,{children:"Deploy-Application.ps1"}),", ",(0,i.jsx)(t.em,{children:"Deploy-Application.exe"}),", and ",(0,i.jsx)(t.em,{children:"AppDeployToolkitMain.ps1"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"69000 - 69999"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Recommended for user customized exit codes in ",(0,i.jsx)(t.code,{children:"Deploy-Application.ps1"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"70000 - 79999"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Recommended for user customized exit codes in ",(0,i.jsx)(t.code,{children:"Deploy-Application.ps1"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60001"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["An error occurred in ",(0,i.jsx)(t.code,{children:"Deploy-Application.ps1"}),". Check your script syntax use."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60002"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Administrator privileges required for ",(0,i.jsx)(t.code,{children:"Execute-ProcessAsUser"})," function."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60003"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Failure when loading .NET WinForms / WPF Assemblies."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60004"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Failure when displaying the Blocked Application dialog."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60005"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"AllowSystemInteractionFallback option was not selected in the config XML file, so toolkit will not fall back to SYSTEM context with no interaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60006"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Failed to export the schedule task XML file in ",(0,i.jsx)(t.code,{children:"Execute-ProcessAsUser"})," function."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60007"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Deploy-Application.ps1"})," failed to dot source ",(0,i.jsx)(t.code,{children:"AppDeployToolkitMain.ps1"})," either because it could not be found or there was an error while it was being dot sourced."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60008"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,i.jsx)(t.code,{children:"-UserName"})," parameter in the ",(0,i.jsx)(t.code,{children:"Execute-ProcessAsUser"})," function has a default value that is empty because no logged in users were detected when the PSAppDeployToolkit was launched."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60009"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Deploy-Application.exe"})," failed before ",(0,i.jsx)(t.em,{children:"PowerShell.exe"})," process could be launched."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60013"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["If ",(0,i.jsx)(t.code,{children:"Execute-Process"})," function captures an exit code out of range for int32 then return this custom exit code."]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},7468:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var i=s(758);const l={},n=i.createContext(l);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);