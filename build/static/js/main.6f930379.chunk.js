(this.webpackJsonplive_coding=this.webpackJsonplive_coding||[]).push([[0],{170:function(e,t,n){e.exports={Chat:"Chat_Chat__bFHYn",Messages:"Chat_Messages__1pTSF",Input:"Chat_Input__1ctf5"}},196:function(e,t,n){e.exports={FileManager:"FileManager_FileManager__1dVwd"}},197:function(e,t,n){e.exports={ChatMessage:"ChatMessage_ChatMessage__k57rQ",ChatMessage_Date:"ChatMessage_ChatMessage_Date__2w_f9"}},199:function(e,t,n){e.exports={Notice:"NotificationPanel_Notice__25aD5",Notice_Wrapper:"NotificationPanel_Notice_Wrapper__hy2nl"}},200:function(e,t,n){e.exports={ClosedNotice_Text:"ClosedNotice_ClosedNotice_Text__3b3JK"}},201:function(e,t,n){e.exports={Notice:"ClosedNotificationPanel_Notice__17fAd",Notice_Wrapper:"ClosedNotificationPanel_Notice_Wrapper__2UMAr"}},265:function(e,t,n){e.exports={WorkSpaceItem:"WorkSapceItem_WorkSpaceItem__3kt83",WorkSpaceItem_Resizer:"WorkSapceItem_WorkSpaceItem_Resizer__2hhhU"}},266:function(e,t,n){e.exports={List_item:"ContextMenu_List_item__1KZa1",ContextMenuPoint:"ContextMenu_ContextMenuPoint__3ywRb"}},276:function(e,t,n){e.exports={WorkSpace:"WorkSpace_WorkSpace__1F33P",WorkSpace__wrapper_vertical:"WorkSpace_WorkSpace__wrapper_vertical__1JJDr"}},294:function(e,t,n){},334:function(e,t,n){},502:function(e,t,n){},527:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(32),a=n.n(i),s=(n(294),n(7)),r=n(536),l=n(2),d=n(265),u=n.n(d),j=n(6),b=c.a.createRef(),m=function(e){var t=e.children,n=e.size,c=void 0===n?{width:"100%",height:"100%"}:n;e.nextSize,e.setSize,e.setNextSize;return Object(o.useEffect)((function(){var e;(null===(e=b.current)||void 0===e?void 0:e.offsetWidth)||0}),[]),Object(j.jsx)("div",{ref:b,className:u.a.WorkSpaceItem,style:Object(l.a)({},c),children:t})},h=n(161),f={isNoticeAddWindowOpened:!1,noticePos:{startColumn:0,startLineNumber:0,endColumn:0,endLineNumber:0},lineRange:{from:0,to:0},scrollInfo:{left:0,top:0,width:0,height:0,clientWidth:0,clientHeight:0},isSrcollEventActive:!1,fileManagerOpenedFile:{content:""},decorations:[],placement:"topLeft",username:""},p={context:f,setContext:function(){}},O=Object(o.createContext)(p),x=function(){return Object(o.useContext)(O)},g=O,_=n(17),v=n(534),C=n(284),N=n(531),S=n(266),y=n.n(S),w=n(533),M=w.a.Text,L=function(e){var t=e.children,n=e.title,o=void 0===n?"Context menu":n,c=e.placement,i=void 0===c?"rightBottom":c,a=e.trigger,s=void 0===a?"contextMenu":a,r=e.visible,l=void 0!==r&&r,d=e.data,u=e.action,b=e.fileItem,m=e.onVisibleChange;return Object(j.jsx)(C.a,{placement:i,defaultVisible:l,onVisibleChange:m,content:Object(j.jsx)(N.b,{size:"small",dataSource:d,renderItem:function(e){return Object(j.jsx)(N.b.Item,{className:y.a.List_item,style:e.last?{}:{border:"none"},children:Object(j.jsx)("div",{onClick:function(t){e.disabled||u[e.id](t,b)},children:Object(j.jsx)(M,{disabled:e.disabled,children:e.el})},e.id)})}}),title:o,trigger:s,children:t})},k=n(196),T=n.n(k),P=n(288),I=n(289),W=n(167),F=n(286),z=n(169),A=n(273),D=v.a.DirectoryTree,E=function e(t){Object(_.a)(this,e),this.title=void 0,this.key=void 0,this.isLeaf=void 0,this.children=void 0,this.icon=void 0,this.key=t.key,this.isLeaf=t.isLeaf,this.children=t.children,this.icon=t.icon,this.title=Object(j.jsx)(L,{data:[{el:"Open",disabled:!1,last:!0,id:0},{el:"Cut",disabled:!B(),last:!1,id:1},{el:"Copy",disabled:!B(),last:!0,id:2},{el:"Rename",disabled:!B(),last:!1,id:3},{el:"Delete",disabled:!B(),last:!0,id:4}],action:[R,U,V,K,J],fileItem:this,children:t.title})};function B(){return"streamer"===wt}function R(e,t){console.log(t)}function U(e){}function V(e){}function K(e){}function J(e){}var H,q,G=function(e){var t=e.data,n=e.setExpanded,c=e.expanded,i=Object(o.useState)(f.fileManagerOpenedFile),a=Object(s.a)(i,2),r=(a[0],a[1]);Object(o.useEffect)((function(){Lt.on("notice_open_file",(function(e){l(e.path)}))}),[]);var l=function(e){var t=b(e);t&&(f.fileManagerOpenedFile=t,Lt.emit("open_file",t),r(t))},d=function e(t){var n=[];return t.forEach((function(t){t.isDirectory?n=n.concat(e(t.children)):n.push(t)})),n}(t),u=function(e,t){if(t)return function(e){return e.expanded?Object(j.jsx)(P.a,{}):Object(j.jsx)(I.a,{})};switch(e){case".html":return Object(j.jsx)(z.b,{});case".css":return Object(j.jsx)(z.a,{});case".js":return Object(j.jsx)(z.c,{});case".txt":return Object(j.jsx)(A.a,{});default:return Object(j.jsx)(W.a,{})}},b=function(e){return d.filter((function(t){return t.path===e}))[0]};return Object(j.jsx)("div",{className:T.a.FileManager,children:Object(j.jsx)(D,{className:T.a.Tree,switcherIcon:Object(j.jsx)(F.a,{}),showIcon:!0,blockNode:!0,defaultExpandedKeys:c,treeData:function e(t){var n=[];return t.forEach((function(t){var o=t.ext||"",c=new E({title:t.name+o,key:t.path,isLeaf:!t.isDirectory,icon:u(o,t.isDirectory)});t.isDirectory&&(c.children=e(t.children)),n.push(c)})),n}(t),onSelect:function(e,t){t.node.isLeaf&&l(e[0].toString())},onExpand:function(e){var t=e.map((function(e){return e.toString()}));n(t)},onRightClick:function(e){},defaultSelectedKeys:[f.fileManagerOpenedFile.path]})})},Q=n(124),Y=n.n(Q),Z=n(282),X=function(e){var t=e.message,n=e.description,o=e.type,c=e.placement,i=void 0===c?"bottomLeft":c;Z.a[o]({message:t,description:n,placement:i})},$=function(){var e=x(),t=(e.context,e.setContext,Object(o.useState)("")),n=Object(s.a)(t,2),c=n[0],i=n[1],a=Object(o.useRef)(),r=Object(o.useRef)();function l(e){if(q){var t=q.getModel();t&&(H.editor.setModelLanguage(t,function(e){switch(e){case".js":return"javascript";case".css":return"text/css";case".html":return"text/html";default:return""}}(e.ext)),i(function(e){return"object"===typeof e.content?"":e.content}(e)))}}Object(o.useEffect)((function(){l(f.fileManagerOpenedFile),Lt.on("open_file",(function(e){l(e)})),Lt.on("editor_update",(function(e){i(e.value)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h.a,{className:"CodeMirror_custom",defaultLanguage:"javascript",defaultValue:"",theme:"vs-dark",value:c,onChange:function(e,t){var n;i(e),null===(n=Mt.current)||void 0===n||n.emit("editor_data",{value:e,file:f.fileManagerOpenedFile.path})},onMount:function(e,t){a.current=e,r.current=t,H=t,q=e,e.addAction({id:"addNotice",label:"Add Notice",contextMenuGroupId:"2_modification",contextMenuOrder:0,run:function(e){var t=e.getSelection();null!==t&&(f.noticePos=t,f.isNoticeAddWindowOpened=!0,Lt.emit("open_notice_add"))}}),e.addAction({id:"saveAaction",label:"Save Current File",contextMenuGroupId:"9_cutcopypaste",contextMenuOrder:0,keybindings:[t.KeyMod.CtrlCmd|t.KeyCode.KEY_S],run:function(e){"streamer"===wt&&Y.a.post("http://localhost:4000/savefile",{filePath:f.fileManagerOpenedFile.path,content:e.getValue()}).then((function(){Lt.emit("output_reload")})).catch((function(){X({message:"Save file error!",description:"Unexpected error saving file!",type:"error"})}))}}),e.updateOptions({roundedSelection:!0,scrollBeyondLastLine:!1,smoothScrolling:!0,readOnly:"streamer"!=wt}),t.editor.defineTheme("vs-dark-custom",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.selectionBackground":"#e6e6e625","editor.inactiveSelectionBackground":"#e6e6e615"}}),t.editor.setTheme("vs-dark-custom"),e.onDidScrollChange((function(e){f.isSrcollEventActive&&Lt.emit("notice_will_scroll",e)}))}})})},ee=n(11),te=n(538),ne=n(540),oe=n(529),ce=n(539),ie=n(542),ae=n(197),se=n.n(ae),re=function(e){var t=e.title,n=e.content,o=e.date;return Object(j.jsx)("div",{className:se.a.ChatMessage,children:Object(j.jsx)(oe.a,{author:t,avatar:Object(j.jsx)(ce.a,{icon:Object(j.jsx)(ie.a,{})}),content:Object(j.jsx)("p",{children:n}),datetime:Object(j.jsx)("div",{className:se.a.ChatMessage_Date,children:o})})})},le=n(170),de=n.n(le),ue=n(535),je=n(283),be=n(81),me=ue.a.TextArea,he=function(e){var t=e.messages,n=e.setMessageArr,c=(e.setMessageCount,e.sourceMessages),i=Object(o.useState)(""),a=Object(s.a)(i,2),r=a[0],l=a[1];Object(o.useEffect)((function(){be.scroller.scrollTo("scrollPointChat",{duration:0,delay:0,smooth:!0,containerId:"scrollChat"}),Lt.on("chat_message",(function(e){be.scroller.scrollTo("scrollPointChat",{duration:0,delay:0,smooth:!0,containerId:"scrollChat"})}))}),[]);var d=function(e){if(e.preventDefault(),""!==r){var t={content:r,title:f.username,date:(new Date).toLocaleString()};c.push(t),n(c),be.scroller.scrollTo("scrollPointChat",{duration:500,delay:0,smooth:!0,containerId:"scrollChat"}),Lt.emit("new_chat_message",t),l("")}};return Object(j.jsxs)("div",{className:de.a.Chat,children:[Object(j.jsxs)("div",{className:de.a.Messages,id:"scrollChat",children:[function(e){return e.map((function(e,t){return Object(j.jsx)(re,{content:e.content,title:e.title,date:e.date},t)}))}(t),Object(j.jsx)(be.Element,{name:"scrollPointChat"})]}),Object(j.jsxs)("div",{className:de.a.Input,children:[Object(j.jsx)(me,{showCount:!0,allowClear:!0,maxLength:100,value:r,onChange:function(e){l(e.target.value)},onPressEnter:d,autoSize:{maxRows:1,minRows:1}}),Object(j.jsx)(je.a,{type:"primary",onClick:d,style:{marginTop:10},children:"Send Message"})]})]})},fe=n(530),pe=n(543),Oe=n(285),xe=fe.a.Meta,ge=function(e){var t=e.data,n=e.closeNotice,o=e.openNotice,c=function(){o(t.id)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(fe.a,{size:"small",actions:"streamer"===wt?[Object(j.jsx)(pe.a,{onClick:c},"code"),Object(j.jsx)(Oe.a,{onClick:function(){n(t.id)}},"close")]:[Object(j.jsx)(pe.a,{onClick:c},"code")],children:Object(j.jsx)(xe,{avatar:Object(j.jsx)(ce.a,{icon:Object(j.jsx)(ie.a,{})}),title:t.title,description:t.desc})})})},_e=n(199),ve=n.n(_e),Ce=function(e){var t=e.setNoticeCount,n=e.setClosedNoticeArr,o=e.setNoticeArr,c=e.openNotice,i=e.data,a=function(e){var c=i.find((function(t){return t.id===e}));o(i.filter((function(t){return t.id!==e}))),t(i.length-1),n((function(e){return[c].concat(Object(ee.a)(e))}))};return Object(j.jsx)("div",{className:ve.a.Notice,children:Object(j.jsx)(N.b,{dataSource:i.reverse(),renderItem:function(e){return Object(j.jsx)("div",{className:ve.a.Notice_Wrapper,children:Object(j.jsx)(ge,{data:e,closeNotice:a,openNotice:c})})},size:"small"})})},Ne=n(200),Se=n.n(Ne),ye=fe.a.Meta,we=w.a.Text,Me=w.a.Paragraph,Le=function(e){var t=e.data,n=e.openNotice,c=Object(o.useState)(!1),i=Object(s.a)(c,2),a=i[0],r=i[1],l=function(){r(!a)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(fe.a,{type:"inner",size:"small",title:Object(j.jsx)(we,{ellipsis:!0,className:Se.a.ClosedNotice_Text,children:t.title}),extra:a?Object(j.jsx)(je.a,{size:"small",onClick:l,children:"Close"}):Object(j.jsx)(je.a,{size:"small",onClick:l,children:"Open"}),actions:a?[Object(j.jsx)(pe.a,{onClick:function(){n(t.id)}},"code")]:[],children:a?Object(j.jsx)(ye,{avatar:Object(j.jsx)(ce.a,{icon:Object(j.jsx)(ie.a,{})}),description:t.desc}):Object(j.jsx)(Me,{ellipsis:!0,className:Se.a.ClosedNotice_Text,children:t.desc})})})},ke=n(201),Te=n.n(ke),Pe=function(e){var t=e.data,n=e.openNotice;return Object(j.jsx)("div",{className:Te.a.Notice,children:Object(j.jsx)(N.b,{dataSource:t.reverse(),renderItem:function(e){return Object(j.jsx)("div",{className:Te.a.Notice_Wrapper,children:Object(j.jsx)(Le,{data:e,openNotice:n})})},size:"small"})})},Ie=n(544),We=n(545),Fe=n(546),ze=n(547),Ae=n(548),De=n(53),Ee=n.n(De),Be=w.a.Text,Re=function(e){var t=e.children,n=e.data,o=e.isOpened,c=e.setIsOpened,i=e.contentWidget,a=e.placement;return Object(j.jsx)(C.a,{placement:a,visible:o,destroyTooltipOnHide:!0,content:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"CoolMan",children:Object(j.jsxs)(Be,{type:"secondary",strong:!0,style:{fontSize:"0.8em"},children:["from ",n.author]})}),Object(j.jsx)("div",{style:{padding:"5px 0px",fontSize:"1.2em",maxWidth:400},children:n.desc})]}),title:Object(j.jsxs)(ne.b,{style:{width:"100%",justifyContent:"space-between"},children:[n.title,Object(j.jsx)("a",{onClick:function(){c(!1),f.isSrcollEventActive=!1,f.decorations=q.deltaDecorations(f.decorations,[]),i&&q.removeContentWidget(i)},children:Object(j.jsx)(Oe.a,{})})]}),trigger:"contextMenu",children:t})},Ue=n(532),Ve=n(537),Ke=(n(333),n(334),function(e){var t=e.value,n=e.lineStart,o=e.lineCount;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h.a,{className:"CodeMirror_custom",defaultLanguage:"javascript",defaultValue:t,theme:"vs-dark",value:t,onMount:function(e,t){e.updateOptions({roundedSelection:!0,scrollBeyondLastLine:!1,readOnly:!0,minimap:{enabled:!1},lineNumbers:function(e){return n+e-1+""},padding:{bottom:10,top:10}}),t.editor.defineTheme("vs-dark-custom",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.selectionBackground":"#e6e6e625","editor.inactiveSelectionBackground":"#e6e6e615"}}),t.editor.setTheme("vs-dark-custom")},height:o>12?250:19*(o+1)+20})})}),Je=n(275),He=n.n(Je),qe=ue.a.TextArea,Ge={labelCol:{span:8},wrapperCol:{span:16}},Qe={wrapperCol:{offset:0,span:24}},Ye=function(e){var t=e.createNotice,n=x(),c=(n.context,n.setContext,Object(o.useState)(!1)),i=Object(s.a)(c,2),a=i[0],r=i[1];Object(o.useEffect)((function(){Lt.on("open_notice_add",(function(){r(f.isNoticeAddWindowOpened)})),r(f.isNoticeAddWindowOpened)}));var d=Ue.a.useForm(),u=Object(s.a)(d,1)[0];return Object(j.jsx)(Ve.a,{title:"Create notice",width:500,placement:"right",closable:!0,destroyOnClose:!0,onClose:function(){f.isNoticeAddWindowOpened=!1,r(!1),Lt.emit("close_notice_add")},visible:a,footer:Object(j.jsxs)("div",{style:{textAlign:"right"},children:[Object(j.jsx)(je.a,{onClick:function(){f.isNoticeAddWindowOpened=!1,r(!1),Lt.emit("close_notice_add")},style:{marginRight:8},children:"Cancel"}),Object(j.jsx)(je.a,{htmlType:"button",onClick:function(){u.resetFields()},style:{marginRight:8},children:"Reset"}),Object(j.jsx)(je.a,{onClick:function(){},htmlType:"submit",form:"notice_add",type:"primary",children:"Create"})]}),children:Object(j.jsxs)(Ue.a,Object(l.a)(Object(l.a)({},Ge),{},{form:u,name:"notice_add",onFinish:function(e){r(!1),f.isNoticeAddWindowOpened=!1,t(e)},children:[Object(j.jsx)(Ue.a.Item,{name:"Question",label:"Question",rules:[{required:!0}],children:Object(j.jsx)(ue.a,{allowClear:!0})}),Object(j.jsx)(Ue.a.Item,{name:"Description",label:"Description",rules:[{required:!0}],children:Object(j.jsx)(qe,{allowClear:!0,showCount:!0,maxLength:300,rows:6})}),Object(j.jsx)(Ue.a.Item,{children:Object(j.jsx)(He.a,{strong:!0,style:{fontSize:"1.2em"},children:"Lines selected:"})}),Object(j.jsx)(Ue.a.Item,Object(l.a)(Object(l.a)({},Qe),{},{style:{minHeight:300},children:Object(j.jsx)(Ke,{value:function(){if(void 0===q||!a)return"";for(var e="",t=f.noticePos.startLineNumber;t<f.noticePos.endLineNumber+1;t++){var n;e+=null===(n=q.getModel())||void 0===n?void 0:n.getLineContent(t),t!=f.noticePos.endLineNumber&&(e+="\n")}return e}(),lineStart:f.noticePos.startLineNumber,lineCount:f.noticePos.endLineNumber-f.noticePos.startLineNumber})}))]}))})},Ze=w.a.Text,Xe=[{id:6,title:"\u041e\u0447\u0435\u043d\u044c \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u043e!",desc:"\u041c\u043e\u0436\u0435\u0448\u044c \u0435\u0449\u0451 \u0440\u0430\u0437 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u044c \u0447\u0442\u043e \u0442\u0443\u0442. \u042f \u0432\u0441\u0451 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b.",author:"Kolya",position:{startLineNumber:4,endLineNumber:5,startColumn:4,endColumn:6},currentFile:"C:\\Users\\ermuh\\Documents\\js_projects\\live_coding_server\\root\\scripts\\index.js"},{id:7,title:"\u0410 \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u044d\u0442\u043e\u0442 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u043a\u043e\u0434\u0430?",desc:"\u042f \u043f\u043e\u043d\u044f\u043b, \u0447\u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e, \u043d\u043e \u043a\u0430\u043a \u043d\u0435 \u043f\u0430\u0434\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0430?\n\u042d\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e \u0438\u043b\u0438 \u043a\u0430\u043a?",author:"Olga",position:{startLineNumber:40,endLineNumber:40,startColumn:60,endColumn:60},currentFile:"/script/index.js"},{id:8,title:"\u0410\u0430\u0430\u0430! \u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",desc:"\u0413\u043e\u043b\u043e\u0432\u0430 \u043a\u0438\u043f\u0438\u0442! \u041f\u0436, \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0438 \u043a\u0430\u043a \u044d\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u0442\u0441\u044f.\n\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e, \u043f\u043e\u043c\u043e\u0433\u0438!",author:"Dasha",position:{startLineNumber:55,endLineNumber:55,startColumn:12,endColumn:34},currentFile:"/script/index.js"}],$e=[{id:1,title:"\u0427\u0442\u043e \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u0447\u043a\u0435 \u043a\u043e\u0434\u0430?",desc:"\u041d\u0438\u043a\u0430\u043a \u043d\u0435\u043c\u043e\u0433\u0443 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f. \u041e\u0431\u044a\u044f\u0441\u043d\u0438 \u043f\u043b\u0438\u0437!",author:"Dima",position:{startLineNumber:7,endLineNumber:12,startColumn:10,endColumn:10},currentFile:"/script/index.js"},{id:2,title:"\u0410 \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432\u0435\u0437\u0434\u0435 \u0442\u0430\u043a?",desc:"\u0410 \u0435\u0441\u043b\u0438 \u0437\u0430\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0435\u0441\u0442 \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f?\n\u0412\u043e\u0436\u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438?",author:"Danya",position:{startLineNumber:1,endLineNumber:3,startColumn:12,endColumn:12},currentFile:"/script/index.js"},{id:3,title:"\u0425\u0430\u0445, \u043f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u043e",desc:"\u041e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e. \u041f\u0440\u0430\u0432\u0434\u0430 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u0442\u0440\u0443\u0434\u043d\u044b\u0439 \u0431\u0443\u0434\u0435\u0442.",author:"Vova",position:{startLineNumber:23,endLineNumber:23,startColumn:23,endColumn:23},currentFile:"/script/index.js"},{id:4,title:"\u0427\u0442\u043e-\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0435",desc:"\u041e\u0447\u0435\u043d\u044c \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0443\u0442. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438\u0437-\u0437\u0430 \u043f\u0435\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439... \u0418\u043b\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u043d\u0435 \u0442\u043e\u0442.\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u044c",author:"Oleg",position:{startLineNumber:45,endLineNumber:45,startColumn:2,endColumn:2},currentFile:"/script/index.js"}],et=[],tt=[],nt="",ot=!1,ct=0,it=0,at=document.createElement("div"),st=function(e){e.setToolPanelSize;var t,n=x(),c=(n.context,n.setContext,Object(o.useState)(!1)),i=Object(s.a)(c,2),r=i[0],d=i[1],u=Object(o.useState)(!1),b=Object(s.a)(u,2),m=b[0],h=b[1],p=Object(o.useState)(""),O=Object(s.a)(p,2),g=O[0],_=O[1],v=Object(o.useState)($e.length),C=Object(s.a)(v,2),N=C[0],S=C[1],y=Object(o.useState)(ct),w=Object(s.a)(y,2),M=w[0],L=w[1],k=Object(o.useState)(et),T=Object(s.a)(k,2),P=T[0],I=T[1],F=Object(o.useState)(Xe),z=Object(s.a)(F,2),A=z[0],D=z[1],E=Object(o.useState)($e),B=Object(s.a)(E,2),R=B[0],U=B[1],V=Object(o.useState)(0),K=Object(s.a)(V,2),J=K[0],Q=K[1],Z=Object(o.useState)({width:"0px",height:"100%"}),$=Object(s.a)(Z,2),oe=$[0],ce=$[1],ie=Object(o.useState)([]),ae=Object(s.a)(ie,2),se=ae[0],re=ae[1],le=Object(o.useState)("topLeft"),de=Object(s.a)(le,2),ue=de[0],je=de[1],be=Object(o.useState)(tt),me=Object(s.a)(be,2),fe=me[0],pe=me[1],Oe=Object(o.useState)(it),xe=Object(s.a)(Oe,2),ge=xe[0],_e=xe[1];Object(o.useEffect)((function(){Lt.on("close_notice_add",(function(){})),Lt.on("notice_will_scroll",(function(e){var t=document.getElementsByClassName("CoolMan")[0],n=at.offsetTop-e.scrollTop;if(t){var o=t.closest(".ant-popover ");if(!o)return;(null===o||void 0===o?void 0:o.classList.contains("ant-popover-placement-bottomLeft"))?o.style.top=n+17+"px":o.style.top=n-o.offsetHeight-2+"px"}})),Y.a.get("http://localhost:4000/directory").then((function(e){e.data.sort((function(e,t){return e.isDirectory?-1:t.isDirectory?0:1})),tt=e.data,pe(tt)})).catch((function(e){X({message:Object(j.jsx)(Ze,{type:"danger",children:"Files fetch error."}),description:"Unexpected error on server! Try to reload page.\n"+e,type:"error"})})),Y.a.get("http://localhost:4000/chat_messages").then((function(e){et=e.data,I(et),L(et.length)})).catch((function(e){X({message:Object(j.jsx)(Ze,{type:"danger",children:"Chat messages fetch error."}),description:"Unexpected error on server! Try to reload page.\n"+e,type:"error"})})),Lt.on("chat_message",(function(e){et.push(e),ot?"chat"!==nt&&(ct++,L(ct)):(ct++,L(ct)),I(et),_e(++it)})),Lt.on("editor_data_broadcast",(function(e){tt.forEach((function(t){t.path===e.file&&(t.content=e.value,pe(tt))})),f.fileManagerOpenedFile.path===e.file&&(f.fileManagerOpenedFile.content=e.value,Lt.emit("editor_update",e))}))}),[]);var ve="streamer"===wt?[{icon:Object(j.jsx)(W.a,{}),name:"file"},{icon:Object(j.jsx)(te.a,{className:Ee.a.Badge,count:M,overflowCount:100,size:"small",offset:[-5,0],title:"Unread messages",children:Object(j.jsx)(Ie.a,{className:Ee.a.ToolPanel_Icons})}),name:"chat"},{icon:Object(j.jsx)(We.a,{}),name:"camera"},{icon:Object(j.jsx)(Fe.a,{}),name:"settings"},{icon:Object(j.jsx)(te.a,{className:Ee.a.Badge,count:N,overflowCount:9,size:"small",offset:[-5,0],title:"Unread messages",children:Object(j.jsx)(ze.a,{className:Ee.a.ToolPanel_Icons})}),name:"notice"},{icon:Object(j.jsx)(Ae.a,{}),name:"closed_notice"}]:[{icon:Object(j.jsx)(W.a,{}),name:"file"},{icon:Object(j.jsx)(te.a,{className:Ee.a.Badge,count:M,overflowCount:100,size:"small",offset:[-5,0],title:"Unread messages",children:Object(j.jsx)(Ie.a,{className:Ee.a.ToolPanel_Icons})}),name:"chat"},{icon:Object(j.jsx)(te.a,{className:Ee.a.Badge,count:N,overflowCount:9,size:"small",offset:[-5,0],title:"Unread messages",children:Object(j.jsx)(ze.a,{className:Ee.a.ToolPanel_Icons})}),name:"notice"},{icon:Object(j.jsx)(Ae.a,{}),name:"closed_notice"}];f.placement="topLeft";var Ne=function(e){m&&(h(!1),q.deltaDecorations(f.decorations,[]),f.isSrcollEventActive=!1);var n=we(e);f.fileManagerOpenedFile.path!==n.currentFile&&Lt.emit("notice_open_file",{path:n.currentFile}),q.revealLineInCenter(we(e).position.startLineNumber,0);var o;q.getScrollTop();n.position.startLineNumber<10?(o=n.position.endLineNumber,f.placement="bottomLeft"):(o=n.position.startLineNumber,f.placement="topLeft"),je(f.placement),t={getId:function(){return"my.content.widget"},getDomNode:function(){return at},getPosition:function(){return{position:{lineNumber:o,column:(n.position.endColumn-n.position.startColumn)/2},preference:[H.editor.ContentWidgetPositionPreference.ABOVE,H.editor.ContentWidgetPositionPreference.BELOW]}}},q.addContentWidget(t),f.decorations=q.deltaDecorations([],[{range:n.position,options:{isWholeLine:!0,className:"noticeLineSelected",marginClassName:"noticeLineSelectedMargin",glyphMarginClassName:"noticeLineSelectedGlyph",hoverMessage:{value:"".concat(n.title," from ").concat(n.author)}}}]),Q(e),h(!0),f.isSrcollEventActive=!0},Se=function(e){_(e),nt=e,d(!0),ot=!0,ce({width:"250px",height:"100%"}),"chat"===nt&&L(ct=0)},ye=function(e,t){r?g!=t?(Se(t),nt=t):(ce({width:"0px",height:"100%"}),d(!1),ot=!1):(Se(t),nt=t)},we=function(e){return[].concat(Object(ee.a)(R),Object(ee.a)(A)).filter((function(t){return t.id===e}))[0]};return Object(j.jsxs)("div",{className:Ee.a.Wrapper,children:[Object(j.jsx)(ne.b,{className:"".concat(Ee.a.ToolPanel_Icons," ").concat(Ee.a.ToolPanel_Space),style:{width:50,minWidth:50},direction:"vertical",children:function(e){return e.map((function(e){return Object(j.jsx)("div",{className:Ee.a.Icon,onClick:function(t){return ye(t,e.name)},children:e.icon},e.name)}))}(ve)}),Object(j.jsx)("div",{className:Ee.a.ToolPanel_OpenedTool,style:Object(l.a)({},oe),children:function(e){switch(e){case"file":return Object(j.jsx)(G,{data:fe,expanded:se,setExpanded:re});case"chat":return Object(j.jsx)(he,{sourceMessages:et,messages:P,setMessageArr:I,setMessageCount:L},ge);case"notice":return Object(j.jsx)(Ce,{data:R,setNoticeCount:S,setClosedNoticeArr:D,setNoticeArr:U,openNotice:Ne});case"closed_notice":return Object(j.jsx)(Pe,{data:A,openNotice:Ne})}}(g)}),m&&Object(j.jsx)(j.Fragment,{children:a.a.createPortal(Object(j.jsx)("div",{style:{position:"absolute",top:13},children:Object(j.jsx)(Re,{placement:ue,data:we(J),isOpened:m,setIsOpened:h,contentWidget:t})}),at)}),Object(j.jsx)(Ye,{createNotice:function(e){var t=f.noticePos;U([{id:R.length+A.length+1,title:e.Question,desc:e.Description,author:"Han Solo",position:t,currentFile:f.fileManagerOpenedFile.path}].concat(Object(ee.a)(R))),S(R.length+1)}})]})},rt=n(60),lt=n.n(rt),dt=n(549),ut=n(541),jt=n(550),bt=0,mt=0,ht=[],ft=w.a.Text,pt=function(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)(0),r=Object(s.a)(a,2),l=r[0],d=r[1],u=Object(o.useState)(ht),b=Object(s.a)(u,2),m=b[0],h=b[1],f=Object(o.useState)(!0),p=Object(s.a)(f,2),O=(p[0],p[1],Object(o.useState)("100%")),x=Object(s.a)(O,2),g=x[0],_=x[1],v=Object(o.useState)("overlay"),C=Object(s.a)(v,2),N=C[0],S=C[1],y=Object(o.useState)("80%"),w=Object(s.a)(y,2),M=w[0],L=w[1],k=Object(o.useState)(!1),T=Object(s.a)(k,2),P=T[0],I=T[1],W=c.a.createRef();Object(o.useEffect)((function(){function e(){i(++bt)}return Lt.on("output_reload",e),window.addEventListener("message",(function(e){if(e.data&&"iframe"===e.data.source){var t;if("error"===e.data.message[0]){var n=e.data.message[1].url.split("/");t=Object(j.jsxs)("div",{className:lt.a.ConsoleItem,children:[Object(j.jsx)(ft,{type:"danger",code:!0,children:e.data.message[1].error.stack}),Object(j.jsx)(ft,{type:"secondary",underline:!0,strong:!0,className:lt.a.fileAndLine,children:n[n.length-1]+":"+e.data.message[1].lineNo})]},ht.length)}else t=Object(j.jsxs)("div",{className:lt.a.ConsoleItem,children:[Object(j.jsx)(ft,{type:"secondary",code:!0,children:e.data.message.slice(2).map((function(e){return JSON.stringify(e)})).join(" ")}),Object(j.jsx)(ft,{type:"secondary",underline:!0,strong:!0,className:lt.a.fileAndLine,children:e.data.message[1]})]},ht.length);ht.push(t),h(ht),d(++mt),be.scroller.scrollTo("scrollPoint",{duration:500,delay:0,smooth:!0,containerId:"scroll"})}})),function(){Lt.off("output_reload",e)}}),[]);var F=function(){P?(_("100%"),L("80%"),S("overlay"),I(!1)):(_("0%"),S("hidden"),L("95%"),I(!0))};return Object(j.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff"},children:[Object(j.jsx)("iframe",{ref:W,src:"http://localhost:4000/",frameBorder:"0",style:{width:"100%",height:M,overflow:"overlay"},id:"iframe"},n),Object(j.jsxs)("div",{className:lt.a.Console,style:{height:"20%"},children:[Object(j.jsxs)("div",{className:lt.a.ConsoleMenu,children:[Object(j.jsx)(ft,{type:"secondary",style:{color:"rgba(190, 190, 190, 0.623)",margin:"0px 5px"},children:"Console"}),Object(j.jsxs)("div",{className:lt.a.ConsoleMenuButtons,children:[Object(j.jsx)(dt.a,{className:lt.a.Button,onClick:function(){h(ht=[])}}),P?Object(j.jsx)(ut.a,{className:lt.a.Button,onClick:F}):Object(j.jsx)(jt.a,{className:lt.a.Button,onClick:F})]})]}),Object(j.jsxs)("div",{className:lt.a.ConsoleOutput,id:"scroll",style:{height:g,overflow:N},children:[m,Object(j.jsx)(be.Element,{name:"scrollPoint"})]},l)]})]})},Ot=n(276),xt=n.n(Ot),gt=function(){var e=Object(o.useState)({width:"max-content",height:"100%"}),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)({width:"50%",height:"100%"}),a=Object(s.a)(i,2),r=a[0],l=a[1],d=Object(o.useState)({width:"50%",height:"100%"}),u=Object(s.a)(d,2),b=u[0],h=u[1];return Object(j.jsxs)("div",{className:xt.a.WorkSpace,children:[Object(j.jsx)(m,{size:n,setSize:c,nextSize:r,setNextSize:l,children:Object(j.jsx)(st,{setToolPanelSize:c})}),Object(j.jsx)(m,{size:r,setSize:l,nextSize:b,setNextSize:h,children:Object(j.jsx)($,{})}),Object(j.jsx)(m,{size:b,setSize:c,nextSize:r,setNextSize:l,children:Object(j.jsx)(pt,{})})]})},_t=r.a.Content,vt=function(){return Object(j.jsx)(r.a,{style:{height:"100%"},children:Object(j.jsx)(_t,{children:Object(j.jsx)(gt,{})})})},Ct=(n(502),n(503),n(277)),Nt=n.n(Ct),St=n(278),yt=w.a.Text,wt=window.confirm("You are a streamer?")?"streamer":"viewer";f.username=wt;var Mt,Lt=new Nt.a;var kt=function(){var e=Object(o.useState)(f),t=Object(s.a)(e,2),n=t[0],c=t[1];return Mt=Object(o.useRef)(),Object(o.useEffect)((function(){var e,t;(Mt.current=Object(St.io)("http://localhost:4000",{reconnection:!1,transports:["websocket"],query:{roomId:"testing"}}),Mt.current.on("connect",(function(){console.log("connected")})),Mt.current.on("disconnect",(function(e){console.log("disconnected by ",e)})),Mt.current.on("connect_error",(function(e){X({message:Object(j.jsx)(yt,{type:"danger",children:"Socket connection error\n"}),description:e.message,type:"error"})})),null===(e=Mt.current)||void 0===e||e.on("chat_message",(function(e){Lt.emit("chat_message",e)})),"viewer"===wt)&&(null===(t=Mt.current)||void 0===t||t.on("editor_data_broadcast",(function(e){Lt.emit("editor_data_broadcast",e)})));return Lt.on("new_chat_message",(function(e){var t;null===(t=Mt.current)||void 0===t||t.emit("new_chat_message",e)})),function(){var e;null===(e=Mt.current)||void 0===e||e.disconnect()}}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g.Provider,{value:{context:n,setContext:c},children:Object(j.jsx)(vt,{})})})},Tt=n(279);n.n(Tt).a.config(),a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(kt,{})}),document.getElementById("root"))},53:function(e,t,n){e.exports={ToolPanel_Icons:"ToolPanel_ToolPanel_Icons__3vMI8",ToolPanel_Space:"ToolPanel_ToolPanel_Space__21Vbq",Wrapper:"ToolPanel_Wrapper__2VDXt",ToolPanel_OpenedTool:"ToolPanel_ToolPanel_OpenedTool__3B8ZD",Icon:"ToolPanel_Icon__3WgFO"}},60:function(e,t,n){e.exports={ConsoleItem:"OutputWindow_ConsoleItem__2vfJN",Console:"OutputWindow_Console__g3APw",ConsoleOutput:"OutputWindow_ConsoleOutput__2w6el",ConsoleMenu:"OutputWindow_ConsoleMenu__2hM3U",ConsoleMenuButtons:"OutputWindow_ConsoleMenuButtons__2GWdI",Button:"OutputWindow_Button__11b6a",FileAndLine:"OutputWindow_FileAndLine__Pf3As"}}},[[527,1,2]]]);
//# sourceMappingURL=main.6f930379.chunk.js.map