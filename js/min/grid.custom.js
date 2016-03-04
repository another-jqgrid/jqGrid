(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var D=a.jgrid,w=D.jqID,R=a.fn.jqGrid,F=R.getGuiStyles,V=R.getGridRes;D.extend({getColProp:function(a){var b=this[0];return null!=b&&b.grid&&(a=b.p.iColByName[a],void 0!==a)?b.p.colModel[a]:{}},setColProp:function(e,b){return this.each(function(){var d=this.p,c;this.grid&&null!=d&&b&&(c=d.iColByName[e],void 0!==
c&&a.extend(!0,d.colModel[c],b))})},sortGrid:function(a,b,d){return this.each(function(){var c=this.grid,f=this.p,h=f.colModel,k=h.length,l,g,m=!1;if(c)for(a||(a=f.sortname),"boolean"!==typeof b&&(b=!1),g=0;g<k;g++)if(l=h[g],l.index===a||l.name===a){!0===f.frozenColumns&&!0===l.frozen&&(m=c.fhDiv.find("#"+f.id+"_"+a));m&&0!==m.length||(m=c.headers[g].el);c=l.sortable;("boolean"!==typeof c||c)&&this.sortData("jqgh_"+f.id+"_"+a,g,b,d,m);break}})},clearBeforeUnload:function(){return this.each(function(){var e=
this.p,b=this.grid,d,c=D.clearArray,f=Object.prototype.hasOwnProperty;a.isFunction(b.emptyRows)&&b.emptyRows.call(this,!0,!0);a(document).unbind("mouseup.jqGrid"+e.id);a(b.hDiv).unbind("mousemove");a(this).unbind();var h,k=b.headers.length;for(h=0;h<k;h++)b.headers[h].el=null;for(d in b)b.hasOwnProperty(d)&&(b.propOrMethod=null);b="formatCol sortData updatepager refreshIndex setHeadCheckBox constructTr clearToolbar fixScrollOffsetAndhBoxPadding rebuildRowIndexes modalAlert toggleToolbar triggerToolbar formatter addXmlData addJSONData ftoolbar _inlinenav nav grid p".split(" ");
k=b.length;for(h=0;h<k;h++)f.call(this,b[h])&&(this[b[h]]=null);this._index={};c(e.data);c(e.lastSelectedData);c(e.selarrrow);c(e.savedRow)})},GridDestroy:function(){return this.each(function(){var e=this.p;if(this.grid&&null!=e){e.pager&&a(e.pager).remove();try{a("#alertmod_"+e.idSel).remove(),a(this).jqGrid("clearBeforeUnload"),a(e.gBox).remove()}catch(b){}}})},GridUnload:function(){return this.each(function(){var e=a(this),b=this.p,d=a.fn.jqGrid;this.grid&&(e.removeClass(d.getGuiStyles.call(e,
"grid","ui-jqgrid-btable")),b.pager&&a(b.pager).empty().removeClass(d.getGuiStyles.call(e,"pagerBottom","ui-jqgrid-pager")).removeAttr("style").removeAttr("dir"),e.jqGrid("clearBeforeUnload"),e.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),e.empty(),e.insertBefore(b.gBox).show(),a(b.pager).insertBefore(b.gBox).show(),a(b.gBox).remove())})},setGridState:function(e){return this.each(function(){var b=this.p,d=this.grid,c=d.cDiv,f=a(d.uDiv),
h=a(d.ubDiv);if(d&&null!=b){var d=R.getIconRes.call(this,"gridMinimize.visible"),k=R.getIconRes.call(this,"gridMinimize.hidden");"hidden"===e?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",b.gView).slideUp("fast"),b.pager&&a(b.pager).slideUp("fast"),b.toppager&&a(b.toppager).slideUp("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&h.slideUp("fast"),f.slideUp("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",c).removeClass(d).addClass(k),b.gridstate="hidden"):
"visible"===e&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",b.gView).slideDown("fast"),b.pager&&a(b.pager).slideDown("fast"),b.toppager&&a(b.toppager).slideDown("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&h.slideDown("fast"),f.slideDown("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",c).removeClass(k).addClass(d),b.gridstate="visible")}})},filterToolbar:function(e){return this.each(function(){var b=this,d=b.grid,c=a(b),f=b.p,h=D.bindEv,k=D.info_dialog,
l=D.htmlEncode;if(!this.ftoolbar){var g=a.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",applyLabelClasses:!0,loadFilterDefaults:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},D.search,f.searching||{},e||{}),m=f.colModel,v=function(a){return V.call(c,
a)},T=v("errors.errcap"),M=v("edit.bClose"),G=v("edit.msg"),y=F.call(b,"states.hover"),I=F.call(b,"states.select"),L=F.call(b,"filterToolbar.dataField"),J,C=function(){var b;b=f.postData.filters;var c={},d,e,n=f.iColByName,h,p;"string"===typeof b&&(b=a.parseJSON(b));d=(b||{}).rules;if(!(null==b||b.groupOp.toUpperCase()!==g.groupOp.toUpperCase()||null==d||0===d.length||null!=b.groups&&0<b.groups.length)){for(b=0;b<d.length;b++){e=d[b];h=m[n[e.field]];if(null==h||!1===h.search)return;p=h.searchoptions||
{};if(p.sopt){if(0>a.inArray(e.op,p.sopt))return}else if("select"===h.stype){if("eq"!==e.op)return}else if(e.op!==g.defaultSearch)return;c[h.name]={op:e.op,data:e.data}}return c}},B=function(){var e={},H=0,h={};a.each(m,function(){var c=this,p=c.index||c.name,q,n;q=c.searchoptions||{};var k=a("#gs_"+w(c.name),!0===c.frozen&&!0===f.frozenColumns?d.fhDiv:d.hDiv),P=function(a,b){var d=c.formatoptions||{};return void 0!==d[a]?d[a]:v("formatter."+(b||c.formatter)+"."+a)},U=function(a){var b=P("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,
"\\$1");return a.replace(new RegExp(b,"g"),"")};n=g.searchOperators?k.parent().prev().children("a").data("soper")||g.defaultSearch:q.sopt?q.sopt[0]:"select"===c.stype?"eq":g.defaultSearch;if("custom"===c.stype&&a.isFunction(q.custom_value)&&0<k.length&&"SPAN"===k[0].nodeName.toUpperCase())q=q.custom_value.call(b,k.children(".customelement").first(),"get");else if("select"===c.stype)q=k.val();else switch(q=a.trim(k.val()),c.formatter){case "integer":q=U(q).replace(P("decimalSeparator","number"),".");
""!==q&&(q=String(parseInt(q,10)));break;case "number":q=U(q).replace(P("decimalSeparator"),".");""!==q&&"0"===String(q).charAt(0)&&(q=String(parseFloat(q)));break;case "currency":var k=P("prefix"),r=P("suffix");k&&k.length&&(q=q.substr(k.length));r&&r.length&&(q=q.substr(0,q.length-r.length));q=U(q).replace(P("decimalSeparator"),".");""!==q&&(q=String(parseFloat(q)))}if(q||"nu"===n||"nn"===n)e[p]=q,h[p]=n,H++;else try{delete f.postData[p]}catch(l){}});var n=0<H?!0:!1;if(g.stringResult||g.searchOperators||
"local"===f.datatype){var p='{"groupOp":"'+g.groupOp+'","rules":[',k=0;a.each(e,function(a,b){0<k&&(p+=",");p+='{"field":"'+a+'",';p+='"op":"'+h[a]+'",';p+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';k++});p+="]}";a.extend(f.postData,{filters:p});a.each(["searchField","searchString","searchOper"],function(a,b){f.postData.hasOwnProperty(b)&&delete f.postData[b]})}else a.extend(f.postData,e);var r;f.searchurl&&(r=f.url,c.jqGrid("setGridParam",{url:f.searchurl}));var l="stop"===
c.triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!l&&a.isFunction(g.beforeSearch)&&(l=g.beforeSearch.call(b));l||c.jqGrid("setGridParam",{search:n}).trigger("reloadGrid",[a.extend({page:1},g.reloadGridSearchOptions||{})]);r&&c.jqGrid("setGridParam",{url:r});c.triggerHandler("jqGridToolbarAfterSearch");a.isFunction(g.afterSearch)&&g.afterSearch.call(b)},N=v("search.odata")||[],t=f.customSortOperations,n=function(d,H,e){a("#sopt_menu").remove();H=parseInt(H,10);e=parseInt(e,10)+18;var p,n=0,h=[],
k=a(d).data("soper"),n=a(d).data("colname"),r=a(".ui-jqgrid-view").css("font-size")||"11px";H="<ul id='sopt_menu' class='"+F.call(b,"searchToolbar.menu","ui-search-menu")+"' role='menu' tabindex='0' style='z-index:9999;display:block;font-size:"+r+";left:"+H+"px;top:"+e+"px;'>";n=f.iColByName[n];if(void 0!==n){n=m[n];e=a.extend({},n.searchoptions);var u,x;e.sopt||(e.sopt=[],e.sopt[0]="select"===n.stype?"eq":g.defaultSearch);a.each(N,function(){h.push(this.oper)});null!=t&&a.each(t,function(a){h.push(a)});
for(n=0;n<e.sopt.length;n++)r=e.sopt[n],p=a.inArray(r,h),-1!==p&&(p=N[p],void 0!==p?(x=g.operands[r],u=p.text):null!=t&&(u=t[r],x=u.operand,u=u.text),p=k===r?I:"",H+='<li class="ui-menu-item '+p+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+l(r)+'" data-oper="'+l(x)+'"><table><tr><td style="width:25px">'+l(x)+"</td><td>"+l(u)+"</td></tr></table></a></li>");H+="</ul>";a("body").append(H);a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");
a("#sopt_menu > li > a").hover(function(){a(this).addClass(y)},function(){a(this).removeClass(y)}).click(function(){var b=a(this).attr("value"),e=a(this).data("oper");c.triggerHandler("jqGridToolbarSelectOper",[b,e,d]);a("#sopt_menu").hide();a(d).text(e).data("soper",b);!0===g.autosearch&&(e=a(d).parent().next().children()[0],(a(e).val()||"nu"===b||"nn"===b)&&B())})}},p,r=a("<tr></tr>",{"class":"ui-search-toolbar",role:"row"});g.loadFilterDefaults&&(J=C());a.each(m,function(c){var d,e;e="";var n,
l,m=this.searchoptions,K=this.editoptions,S=a("<th></th>",{"class":F.call(b,"colHeaders","ui-th-column ui-th-"+f.direction+" "+(g.applyLabelClasses?this.labelClasses||"":""))}),u=a("<div></div>"),x=a("<table class='ui-search-table'><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></table>");!0===this.hidden&&a(S).css("display","none");this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");d=a.extend({mode:"filter"},
m||{});if(this.search){if(g.searchOperators){e=f.search&&null!=J[this.name]?J[this.name].op:d.sopt?d.sopt[0]:"select"===this.stype?"eq":g.defaultSearch;for(l=0;l<N.length;l++)if(N[l].oper===e){n=g.operands[e]||"";break}if(void 0===n&&null!=t)for(var q in t)if(t.hasOwnProperty(q)&&q===e){n=t[q].operand;break}void 0===n&&(n="=");e="<a title='"+(null!=d.searchtitle?d.searchtitle:v("search.operandTitle"))+"' data-soper='"+e+"' class='"+F.call(b,"searchToolbar.operButton","soptclass")+"' data-colname='"+
this.name+"'>"+n+"</a>"}a("td",x).first().data("colindex",c).append(e);null!=d.sopt&&1!==d.sopt.length||a("td.ui-search-oper",x).hide();f.search&&null!=J[this.name]&&(d.defaultValue=J[this.name].data);void 0===d.clearSearch&&(d.clearSearch="text"===this.stype?!0:!1);d.clearSearch?(e=v("search.resetTitle")||"Clear Search Value",a("td",x).eq(2).append("<a title='"+e+"' class='"+F.call(b,"searchToolbar.clearButton","clearsearchclass")+"'><span>"+g.resetIcon+"</span></a>")):a("td",x).eq(2).hide();switch(this.stype){case "select":if(e=
this.surl||d.dataUrl)a(u).append(x),a.ajax(a.extend({url:e,context:{stbl:x,options:d,cm:this,iCol:c},dataType:"html",success:function(a,c,e){c=this.cm;var n=this.iCol,f=this.options,p=this.stbl.find(">tbody>tr>td.ui-search-input");void 0!==f.buildSelect?(a=f.buildSelect.call(b,a,e,c,n))&&p.append(a):p.append(a);a=p.children("select");0===a.find("option[value='']").length&&"string"===typeof d.noFilterText&&(A=document.createElement("option"),A.value="",A.innerHTML=d.noFilterText,a.prepend(A));void 0!==
f.defaultValue&&a.val(f.defaultValue);a.attr({name:c.index||c.name,id:"gs_"+c.name});f.attr&&a.attr(f.attr);a.addClass(L);a.css({width:"100%"});h.call(b,a[0],f);D.fullBoolFeedback.call(b,f.selectFilled,"jqGridSelectFilled",{elem:a[0],options:f,cm:c,cmName:c.name,iCol:n,mode:"filter"});!0===g.autosearch&&a.change(function(){B();return!1})}},D.ajaxOptions,f.ajaxSelectOptions||{}));else{var E,C,O;m?(E=(void 0===m.value?"":m.value)||K.value,C=(void 0===m.separator?":":m.separator)||K.separator,O=(void 0===
m.delimiter?";":m.delimiter)||K.delimiter):K&&(E=void 0===K.value?"":K.value,C=void 0===K.separator?":":K.separator,O=void 0===K.delimiter?";":K.delimiter);if(E){var z=document.createElement("select");z.style.width="100%";a(z).attr({name:this.index||this.name,id:"gs_"+this.name});var A,w,I;if("string"===typeof E)for(e=E.split(O),O=0;O<e.length;O++)E=e[O].split(C),A=document.createElement("option"),A.value=E[0],""===E[0]&&(I=!0),A.innerHTML=E[1],z.appendChild(A);else if("object"===typeof E)for(w in E)E.hasOwnProperty(w)&&
(A=document.createElement("option"),A.value=w,""===w&&(I=!0),A.innerHTML=E[w],z.appendChild(A));I||"string"!==typeof d.noFilterText||(A=document.createElement("option"),A.value="",A.innerHTML=d.noFilterText,a(z).prepend(A));void 0!==d.defaultValue&&a(z).val(d.defaultValue);d.attr&&a(z).attr(d.attr);a(z).addClass(L);a(u).append(x);h.call(b,z,d);a("td",x).eq(1).append(z);D.fullBoolFeedback.call(b,d.selectFilled,"jqGridSelectFilled",{elem:z,options:m||K||{},cm:this,cmName:this.name,iCol:c,mode:"filter"});
!0===g.autosearch&&a(z).change(function(){B();return!1})}}break;case "text":c=void 0!==d.defaultValue?d.defaultValue:"";a("td",x).eq(1).append("<input type='text' class='"+L+"' name='"+(this.index||this.name)+"' id='gs_"+this.name+"' value='"+c+"'/>");a(u).append(x);d.attr&&a("input",u).attr(d.attr);h.call(b,a("input",u)[0],d);!0===g.autosearch&&(g.searchOnEnter?a("input",u).keypress(function(a){return 13===(a.charCode||a.keyCode||0)?(B(),!1):this}):a("input",u).keydown(function(a){switch(a.which){case 13:return!1;
case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:p&&clearTimeout(p),p=setTimeout(function(){B()},g.autosearchDelay)}}));break;case "custom":a("td",x).eq(1).append("<span style='width:100%;padding:0;box-sizing:border-box;' class='"+L+"' name='"+(this.index||this.name)+"' id='gs_"+this.name+"'/>");a(u).append(x);try{if(a.isFunction(d.custom_element))if(z=d.custom_element.call(b,void 0!==d.defaultValue?d.defaultValue:"",d))z=a(z).addClass("customelement"),a(u).find("span[name='"+
(this.index||this.name)+"']").append(z);else throw"e2";else throw"e1";}catch(Q){"e1"===Q&&k.call(b,T,"function 'custom_element' "+G.nodefined,M),"e2"===Q?k.call(b,T,"function 'custom_element' "+G.novalue,M):k.call(b,T,"string"===typeof Q?Q:Q.message,M)}}}a(S).append(u);a(S).find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function(){a(this).addClass(y)},function(){a(this).removeClass(y)});a(r).append(S);g.searchOperators||a("td",x).eq(0).hide()});a(d.hDiv).find(">div>.ui-jqgrid-htable>thead").append(r);
g.searchOperators&&(a(".soptclass",r).click(function(b){var c=a(this).offset();n(this,c.left,c.top);b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()}));a(".clearsearchclass",r).click(function(){var b=a(this).parents("tr").first(),c=parseInt(a("td.ui-search-oper",b).data("colindex"),10),d=a.extend({},m[c].searchoptions||{}).defaultValue||"";"select"===m[c].stype?d?a("td.ui-search-input select",b).val(d):a("td.ui-search-input select",b)[0].selectedIndex=
0:a("td.ui-search-input input",b).val(d);!0===g.autosearch&&B()});b.ftoolbar=!0;b.triggerToolbar=B;b.clearToolbar=function(e){var n={},p=0,h;e="boolean"!==typeof e?!0:e;a.each(m,function(){var c,e=a("#gs_"+w(this.name),!0===this.frozen&&!0===f.frozenColumns?d.fhDiv:d.hDiv),g,r=this.searchoptions||{};void 0!==r.defaultValue&&(c=r.defaultValue);h=this.index||this.name;switch(this.stype){case "select":g=0<e.length?!e[0].multiple:!0;e.find("option").each(function(b){this.selected=0===b&&g;if(a(this).val()===
c)return this.selected=!0,!1});if(void 0!==c)n[h]=c,p++;else try{delete f.postData[h]}catch(k){}break;case "text":e.val(c||"");if(void 0!==c)n[h]=c,p++;else try{delete f.postData[h]}catch(k){}break;case "custom":a.isFunction(r.custom_value)&&0<e.length&&"SPAN"===e[0].nodeName.toUpperCase()&&r.custom_value.call(b,e.children(".customelement").first(),"set",c||"")}});var k=0<p?!0:!1;f.resetsearch=!0;if(g.stringResult||g.searchOperators||"local"===f.datatype){var r='{"groupOp":"'+g.groupOp+'","rules":[',
l=0;a.each(n,function(a,b){0<l&&(r+=",");r+='{"field":"'+a+'",';r+='"op":"eq",';r+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';l++});r+="]}";a.extend(f.postData,{filters:r});a.each(["searchField","searchString","searchOper"],function(a,b){f.postData.hasOwnProperty(b)&&delete f.postData[b]})}else a.extend(f.postData,n);var t;f.searchurl&&(t=f.url,c.jqGrid("setGridParam",{url:f.searchurl}));var u="stop"===c.triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!u&&a.isFunction(g.beforeClear)&&
(u=g.beforeClear.call(b));u||e&&c.jqGrid("setGridParam",{search:k}).trigger("reloadGrid",[a.extend({page:1},g.reloadGridResetOptions||{})]);t&&c.jqGrid("setGridParam",{url:t});c.triggerHandler("jqGridToolbarAfterClear");a.isFunction(g.afterClear)&&g.afterClear()};b.toggleToolbar=function(){var b=a("tr.ui-search-toolbar",d.hDiv),e=!0===f.frozenColumns?a("tr.ui-search-toolbar",d.fhDiv):!1;"none"===b.css("display")?(b.show(),e&&e.show()):(b.hide(),e&&e.hide());!0===f.frozenColumns&&(c.jqGrid("destroyFrozenColumns"),
c.jqGrid("setFrozenColumns"))};!0===f.frozenColumns&&(c.jqGrid("destroyFrozenColumns"),c.jqGrid("setFrozenColumns"));c.bind("jqGridRefreshFilterValues.filterToolbar"+(g.loadFilterDefaults?"jqGridAfterLoadComplete.filterToolbar":""),function(){var b,c,d=C(),e=this.p,n;if(e||e.search){for(b in d)d.hasOwnProperty(b)&&(c=d[b],n=a("#gs_"+w(b)),n.val(c.data),n=n.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass"),n.data("soper",c.op),n.text(g.operands[c.op]));for(c=0;c<e.colModel.length;c++)b=
e.colModel[c].name,d.hasOwnProperty(b)||a("#gs_"+w(b)).val("")}})}})},destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),!0===this.p.frozenColumns&&a(this).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},destroyGroupHeader:function(e){void 0===e&&(e=!0);return this.each(function(){var b,d,c,f;b=this.grid;var h=this.p.colModel,
k=a("table.ui-jqgrid-htable thead",b.hDiv);if(b){a(this).unbind(".setGroupHeaders");var l=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),g=b.headers;b=0;for(d=g.length;b<d;b++){c=h[b].hidden?"none":"";c=a(g[b].el).width(g[b].width).css("display",c);try{c.removeAttr("rowSpan")}catch(m){c.attr("rowSpan",1)}l.append(c);f=c.children("span.ui-jqgrid-resize");0<f.length&&(f[0].style.height="");c.children("div")[0].style.top=""}a(k).children("tr.ui-jqgrid-labels").remove();a(k).prepend(l);!0===e&&a(this).jqGrid("setGridParam",
{groupHeader:null})}})},setGroupHeaders:function(e){e=a.extend({useColSpanStyle:!1,applyLabelClasses:!0,groupHeaders:[]},e||{});return this.each(function(){this.p.groupHeader=e;var b,d,c=0,f,h,k,l,g,m,v=this.p,w=v.colModel,M=w.length,G=this.grid.headers,y=a("table.ui-jqgrid-htable",this.grid.hDiv),I=D.isCellClassHidden,L=y.children("thead").children("tr.ui-jqgrid-labels"),J=L.last().addClass("jqg-second-row-header");f=y.children("thead");var C=y.find(".jqg-first-row-header");void 0===C[0]?C=a("<tr>",
{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):C.empty();var B=function(a,b){var c=b.length,d;for(d=0;d<c;d++)if(b[d].startColumnName===a)return d;return-1};a(this).prepend(f);f=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(b=0;b<M;b++)if(k=G[b].el,l=a(k),d=w[b],h={height:"0",width:G[b].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(h).addClass("ui-first-th-"+v.direction+(e.applyLabelClasses?" "+(d.labelClasses||
""):"")).appendTo(C),k.style.width="",h=F.call(this,"colHeaders","ui-th-column-header ui-th-"+v.direction+" "+(e.applyLabelClasses?d.labelClasses||"":"")),g=B(d.name,e.groupHeaders),0<=g){g=e.groupHeaders[g];c=g.numberOfColumns;m=g.titleText;for(g=d=0;g<c&&b+g<M;g++)w[b+g].hidden||I(w[b+g].classes)||a(G[b+g].el).is(":hidden")||d++;h=a("<th>").addClass(h).css({height:"22px","border-top":"0 none"}).html(m);0<d&&h.attr("colspan",String(d));v.headertitles&&h.attr("title",h.text());0===d&&h.hide();l.before(h);
f.append(k);--c}else 0===c?e.useColSpanStyle?l.attr("rowspan",L.length+1):(a("<th>").addClass(h).css({display:d.hidden?"none":"","border-top":"0 none"}).insertBefore(l),f.append(k)):(f.append(k),c--);v=a(this).children("thead");v.prepend(C);f.insertAfter(J);y.prepend(v);e.useColSpanStyle&&(y.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height:"+b.height()+"px !important;cursor:col-resize;")}),y.find(".ui-th-column>div").each(function(){var b=
a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&!b.hasClass("ui-jqgrid-rotate")&&!b.hasClass("ui-jqgrid-rotateOldIE")&&b.css("top",(c.height()-b.outerHeight(!0))/2+"px")}));a(this).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var a=this;if(0===a.length)return 0;var a=a[0],a=a.p.colModel,b=a.length,d=-1,c;for(c=0;c<b&&!0===a[c].frozen;c++)d=c;return d+1},setFrozenColumns:function(){return this.each(function(){var e=this,b=a(e),d=e.p,
c=e.grid;if(c&&null!=d&&!0!==d.frozenColumns){var f=d.colModel,h,k=f.length,l=-1,g=!1,m=[],v=w(d.id),D=F.call(e,"states.hover"),M=F.call(e,"states.disabled");if(!0!==d.subGrid&&!0!==d.treeGrid&&!d.scroll){for(h=0;h<k&&!0===f[h].frozen;h++)g=!0,l=h,m.push("#jqgh_"+v+"_"+w(f[h].name));d.sortable&&(f=a(c.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),f.sortable("destroy"),b.jqGrid("setGridParam",{sortable:{options:{items:0<m.length?">th:not(:has("+m.join(",")+"),:hidden)":">th:not(:hidden)"}}}),b.jqGrid("sortableColumns",
f));if(0<=l&&g){g=d.caption?a(c.cDiv).outerHeight():0;m=a(".ui-jqgrid-htable",d.gView).height();d.toppager&&(g+=a(c.topDiv).outerHeight());!0===d.toolbar[0]&&"bottom"!==d.toolbar[1]&&(g+=a(c.uDiv).outerHeight());c.fhDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===d.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+g+"px;height:"+m+"px;' class='"+F.call(e,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>");c.fbDiv=a("<div style='position:absolute;overflow:hidden;"+
("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(g,10)+parseInt(m,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>");a(d.gView).append(c.fhDiv);f=a(".ui-jqgrid-htable",d.gView).clone(!0);k=f[0].tHead.rows;if(d.groupHeader){a(k[0].cells).filter(":gt("+l+")").remove();a(k).filter(".jqg-third-row-header").each(function(){a(this).children("th[id]").each(function(){var b=a(this).attr("id");b&&b.substr(0,e.id.length+1)===e.id+"_"&&(b=b.substr(e.id.length+1),d.iColByName[b]>
l&&a(this).remove())})});var G=-1,y=-1,I,L;a(k).filter(".jqg-second-row-header").children("th").each(function(){I=parseInt(a(this).attr("colspan")||1,10);L=parseInt(a(this).attr("rowspan")||1,10);1<L?(G++,y++):I&&(G+=I,y++);if(G===l)return!1});G!==l&&(y=l);a(k).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){a(this).children(":gt("+y+")").remove()})}else a(k).each(function(){a(this).children(":gt("+l+")").remove()});a(f).width(1);a(c.fhDiv).append(f).mousemove(function(a){if(c.resizing)return c.dragMove(a),
!1}).scroll(function(){this.scrollLeft=0});d.footerrow&&(f=a(".ui-jqgrid-bdiv",d.gView).height(),c.fsDiv=a("<div style='position:absolute;"+("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(g,10)+parseInt(m,10)+parseInt(f,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),a(d.gView).append(c.fsDiv),g=a(".ui-jqgrid-ftable",d.gView).clone(!0),a("tr",g).each(function(){a("td:gt("+l+")",this).remove()}),a(g).width(1),a(c.fsDiv).append(g));b.bind("jqGridSortCol.setFrozenColumns",function(b,
e,f){b=a("tr.ui-jqgrid-labels:last th:eq("+d.lastsort+")",c.fhDiv);e=a("tr.ui-jqgrid-labels:last th:eq("+f+")",c.fhDiv);a("span.ui-grid-ico-sort",b).addClass(M);a(b).attr("aria-selected","false");a("span.ui-icon-"+d.sortorder,e).removeClass(M);a(e).attr("aria-selected","true");d.viewsortcols[0]||d.lastsort===f||(a("span.s-ico",b).hide(),a("span.s-ico",e).show())});a(d.gView).append(c.fbDiv);a(c.bDiv).scroll(function(){a(c.fbDiv).scrollTop(a(this).scrollTop())});!0===d.hoverrows&&a(d.idSel).unbind("mouseover").unbind("mouseout");
var J=function(a,b){var c=a.height();1<=Math.abs(c-b)&&0<b&&(a.height(b),c=a.height(),1<=Math.abs(b-c)&&a.height(b+Math.round(b-c)))},C=function(a,b){var c=a.width();1<=Math.abs(c-b)&&(a.width(b),c=a.width(),1<=Math.abs(b-c)&&a.width(b+Math.round(b-c)))},B=function(b,c,e,f){var g,k,l,m,w,v,t;t=a(c).position().top;var u,x,q;if(null!=b&&0<b.length){b[0].scrollTop=c.scrollTop;b.css("rtl"===d.direction?{top:t,right:0}:{top:t,left:0});k=b.children("table").children("thead").children("tr");l=a(c).children("div").children("table").children("thead").children("tr");
0===l.length&&(k=a(b.children("table")[0].rows),l=a(a(c).children("div").children("table")[0].rows));g=Math.min(k.length,l.length);u=0<g?a(k[0]).position().top:0;x=0<g?a(l[0]).position().top:0;if(0<=e)for(0<=f&&(g=Math.min(f+1,g));e<g;e++)if(m=a(l[e]),"none"!==m.css("display")&&m.is(":visible")){t=m.position().top;f=a(k[e]);w=f.position().top;v=m.height();if(null!=d.groupHeader&&d.groupHeader.useColSpanStyle)for(q=m[0].cells,h=0;h<q.length;h++)m=q[h],null!=m&&"TH"===m.nodeName.toUpperCase()&&(v=Math.max(v,
a(m).height()));t=v+(t-x)+(u-w);J(f,t)}J(b,c.clientHeight)}},g={resizeDiv:!0,resizedRows:{iRowStart:0,iRowEnd:-1}},N={header:g,resizeFooter:!0,body:g};b.bind("jqGridAfterGridComplete.setFrozenColumns",function(){a(d.idSel+"_frozen").remove();a(c.fbDiv).height(c.hDiv.clientHeight);var e=a(this).clone(!0),f=e[0].rows,g=b[0].rows;a(f).filter("tr[role=row]").each(function(){a(this.cells).filter("td[role=gridcell]:gt("+l+")").remove()});c.fbRows=f;e.width(1).attr("id",d.id+"_frozen");e.appendTo(c.fbDiv);
if(!0===d.hoverrows){var h=function(b,c,d){a(b)[c](D);a(d[b.rowIndex])[c](D)};a(f).filter(".jqgrow").hover(function(){h(this,"addClass",g)},function(){h(this,"removeClass",g)});a(g).filter(".jqgrow").hover(function(){h(this,"addClass",f)},function(){h(this,"removeClass",f)})}B(c.fhDiv,c.hDiv,0,-1);B(c.fbDiv,c.bDiv,0,-1);c.sDiv&&B(c.fsDiv,c.sDiv,0,-1)});var t=function(b){a(c.fbDiv).scrollTop(a(c.bDiv).scrollTop());b.header.resizeDiv&&B(c.fhDiv,c.hDiv,b.header.iRowStart,b.header.iRowEnd);b.body.resizeDiv&&
B(c.fbDiv,c.bDiv,b.body.iRowStart,b.body.iRowEnd);b.resizeFooter&&c.sDiv&&b.resizeFooter&&B(c.fsDiv,c.sDiv,0,-1);var d=c.fhDiv[0].clientWidth;b.header.resizeDiv&&null!=c.fhDiv&&1<=c.fhDiv.length&&J(a(c.fhDiv),c.hDiv.clientHeight);b.body.resizeDiv&&null!=c.fbDiv&&0<c.fbDiv.length&&C(a(c.fbDiv),d);b.resizeFooter&&null!=c.fsDiv&&0<=c.fsDiv.length&&C(a(c.fsDiv),d)};a(d.gBox).bind("resizestop.setFrozenColumns",function(){setTimeout(function(){t(N)},50)});b.bind("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",
function(a,c){var d=b.jqGrid("getInd",c);t({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:d,iRowEnd:d}}})});b.bind("jqGridResizeStop.setFrozenColumns",function(){t(N)});b.bind("jqGridResetFrozenHeights.setFrozenColumns",function(a,b){t(b||N)});c.hDiv.loading||b.triggerHandler("jqGridAfterGridComplete");d.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var e=a(this),b=this.grid,d=this.p,c=w(d.id);
if(b&&!0===d.frozenColumns){a(b.fhDiv).remove();a(b.fbDiv).remove();b.fhDiv=null;b.fbDiv=null;b.fbRows=null;d.footerrow&&(a(b.fsDiv).remove(),b.fsDiv=null);e.unbind(".setFrozenColumns");if(!0===d.hoverrows){var f,h=F.call(this,"states.hover");e.bind("mouseover",function(b){f=a(b.target).closest("tr.jqgrow");"ui-subgrid"!==a(f).attr("class")&&a(f).addClass(h)}).bind("mouseout",function(b){f=a(b.target).closest("tr.jqgrow");a(f).removeClass(h)})}d.frozenColumns=!1;d.sortable&&(b=a(b.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),
b.sortable("destroy"),e.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+c+"_cb,#jqgh_"+c+"_rn,#jqgh_"+c+"_subgrid),:hidden)"}}}),e.jqGrid("sortableColumns",b))}})}})});
//# sourceMappingURL=grid.custom.map
