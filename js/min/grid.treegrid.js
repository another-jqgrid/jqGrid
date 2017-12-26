!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return t||(t=window),void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),require("./grid.base"),e(r),r}:e(jQuery)}(function(e){"use strict";var t=e.jgrid,r=t.getAccessor,i=t.stripPref,a=t.jqID,d=e.fn.jqGrid,l=function(){var r=e.makeArray(arguments);return r[0]="treeGrid"+r[0].charAt(0).toUpperCase()+r[0].substring(1),r.unshift(""),r.unshift(""),r.unshift(this.p),t.feedback.apply(this,r)},n=function(e,t){var r=t[e.treeReader.icon_field],i=e.treeIcons,a=i.plus+" tree-plus",d=i.minus+" tree-minus";return r&&"string"==typeof r&&2===(r=r.split(",")).length&&(d=r[0],a=r[1]),{expanded:d,collapsed:a,common:i.commonIconClass}};t.extend({setTreeNode:function(){return this.each(function(){var t=e(this),r=this.p;if(this.grid&&r.treeGrid){var a=r.treeReader.expanded_field,l=r.treeReader.leaf_field;t.off("jqGridBeforeSelectRow.setTreeNode"),t.on("jqGridBeforeSelectRow.setTreeNode",function(n,s,o){if(null!=o){var c=e(o.target),f=c.closest("tr.jqgrow>td"),h=f.parent(),p=function(){var e=r.data[r._index[i(r.idPrefix,s)]],n=e[a]?"collapse":"expand";e[l]||(d[n+"Row"].call(t,e,h),d[n+"Node"].call(t,e,h))};return c.is("div.treeclick")?p():r.ExpandColClick&&f.length>0&&c.closest("span.cell-wrapper",f).length>0&&p(),!0}})}})},setTreeGrid:function(){return this.each(function(){var t,r,i,a=this.p,d=[],l=["leaf_field","expanded_field","loaded"];if(a.treeGrid){a.treedatatype||e.extend(this.p,{treedatatype:a.datatype}),a.subGrid=!1,a.altRows=!1,a.pgbuttons=!1,a.pginput=!1,a.gridview=!0,null===a.rowTotal&&(a.rowNum=a.maxRowNum),a.rowList=[],a.treeIcons.plus="rtl"===a.direction?a.treeIcons.plusRtl:a.treeIcons.plusLtr,"nested"===a.treeGridModel?a.treeReader=e.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},a.treeReader):"adjacency"===a.treeGridModel&&(a.treeReader=e.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},a.treeReader));for(r in a.colModel)if(a.colModel.hasOwnProperty(r)){t=a.colModel[r].name;for(i in a.treeReader)a.treeReader.hasOwnProperty(i)&&a.treeReader[i]===t&&d.push(t)}e.each(a.treeReader,function(t){var r=String(this);r&&-1===e.inArray(r,d)&&(e.inArray(t,l)>=0?a.additionalProperties.push({name:r,search:!1,convert:function(e){return!0===e||"true"===String(e).toLowerCase()||"1"===String(e)||e}}):a.additionalProperties.push(r))})}})},expandRow:function(t){this.each(function(){var i=e(this),a=this.p;if(this.grid&&a.treeGrid){var n=a.treeReader.expanded_field,s=t[a.localReader.id];if(l.call(this,"beforeExpandRow",{rowid:s,item:t})){var o=d.getNodeChildren.call(i,t);e(o).each(function(){var t=a.idPrefix+r(this,a.localReader.id);e(d.getGridRowById.call(i,t)).css("display",""),this[n]&&d.expandRow.call(i,this)}),l.call(this,"afterExpandRow",{rowid:s,item:t})}}})},collapseRow:function(t){this.each(function(){var i=e(this),a=this.p;if(this.grid&&a.treeGrid){var n=a.treeReader.expanded_field,s=t[a.localReader.id];if(l.call(this,"beforeCollapseRow",{rowid:s,item:t})){var o=d.getNodeChildren.call(i,t);e(o).each(function(){var t=a.idPrefix+r(this,a.localReader.id);e(d.getGridRowById.call(i,t)).css("display","none"),this[n]&&d.collapseRow.call(i,this)}),l.call(this,"afterCollapseRow",{rowid:s,item:t})}}})},getRootNodes:function(){var t=[];return this.each(function(){var r=this.p;if(this.grid&&r.treeGrid)switch(r.treeGridModel){case"nested":var i=r.treeReader.level_field;e(r.data).each(function(){parseInt(this[i],10)===parseInt(r.tree_root_level,10)&&t.push(this)});break;case"adjacency":var a=r.treeReader.parent_id_field;e(r.data).each(function(){null!==this[a]&&"null"!==String(this[a]).toLowerCase()||t.push(this)})}}),t},getNodeDepth:function(t){var r=null;return this.each(function(){var i=this.p;if(this.grid&&i.treeGrid)switch(i.treeGridModel){case"nested":var a=i.treeReader.level_field;r=parseInt(t[a],10)-parseInt(i.tree_root_level,10);break;case"adjacency":r=d.getNodeAncestors.call(e(this),t).length}}),r},getNodeParent:function(t){var r=this[0];if(!r||!r.grid||null==r.p||!r.p.treeGrid||null==t)return null;var i=r.p,a=i.treeReader,d=t[a.parent_id_field];if("nested"===i.treeGridModel){var l=null,n=a.left_field,s=a.right_field,o=a.level_field,c=parseInt(t[n],10),f=parseInt(t[s],10),h=parseInt(t[o],10);return e(i.data).each(function(){if(parseInt(this[o],10)===h-1&&parseInt(this[n],10)<c&&parseInt(this[s],10)>f)return l=this,!1}),l}if(null===d||"null"===d)return null;var p=i._index[d];return void 0!==p?i.data[p]:null},getNodeChildren:function(t){var r=[];return this.each(function(){var i=this.p;if(this.grid&&i.treeGrid)switch(i.treeGridModel){case"nested":var a=i.treeReader.left_field,d=i.treeReader.right_field,l=i.treeReader.level_field,n=parseInt(t[a],10),s=parseInt(t[d],10),o=parseInt(t[l],10);e(i.data).each(function(){parseInt(this[l],10)===o+1&&parseInt(this[a],10)>n&&parseInt(this[d],10)<s&&r.push(this)});break;case"adjacency":var c=i.treeReader.parent_id_field,f=i.localReader.id;e(i.data).each(function(){String(this[c])===String(t[f])&&r.push(this)})}}),r},getFullTreeNode:function(t){var r=[];return this.each(function(){var i,a=this.p;if(this.grid&&a.treeGrid)switch(a.treeGridModel){case"nested":var d=a.treeReader.left_field,l=a.treeReader.right_field,n=a.treeReader.level_field,s=parseInt(t[d],10),o=parseInt(t[l],10),c=parseInt(t[n],10);e(a.data).each(function(){parseInt(this[n],10)>=c&&parseInt(this[d],10)>=s&&parseInt(this[d],10)<=o&&r.push(this)});break;case"adjacency":if(t){r.push(t);var f=a.treeReader.parent_id_field,h=a.localReader.id;e(a.data).each(function(){var e;for(i=r.length,e=0;e<i;e++)if(String(r[e][h])===String(this[f])){r.push(this);break}})}}}),r},getNodeAncestors:function(t){var r=[];return this.each(function(){var i=e(this),a=d.getNodeParent;if(this.grid&&this.p.treeGrid)for(var l=a.call(i,t);l;)r.push(l),l=a.call(i,l)}),r},isVisibleNode:function(t){var r=!0;return this.each(function(){var i=this.p;if(this.grid&&i.treeGrid){var a=d.getNodeAncestors.call(e(this),t),l=i.treeReader.expanded_field;e(a).each(function(){if(!(r=r&&this[l]))return!1})}}),r},isNodeLoaded:function(t){var r;return this.each(function(){var i=this.p;if(this.grid&&i.treeGrid){var a=i.treeReader.leaf_field,l=i.treeReader.loaded;r=void 0!==t&&(void 0!==t[l]?t[l]:!!(t[a]||d.getNodeChildren.call(e(this),t).length>0))}}),r},expandNode:function(t){return this.each(function(){var i,s,o,c=this.p;if(this.grid&&c.treeGrid){var f=c.treeReader;if(!t[f.expanded_field]){if(i=r(t,c.localReader.id),!l.call(this,"beforeExpandNode",{rowid:i,item:t}))return;s=e("#"+c.idPrefix+a(i),this.grid.bDiv)[0],t[f.expanded_field]=!0,o=n(c,t),e("div.treeclick",s).removeClass(o.collapsed).addClass(o.common).addClass(o.expanded),"local"===c.treedatatype||d.isNodeLoaded.call(e(this),c.data[c._index[i]])||this.grid.hDiv.loading||(c.treeANode=s.rowIndex,c.datatype=c.treedatatype,d.setGridParam.call(e(this),{postData:"nested"===c.treeGridModel?{nodeid:i,n_level:t[f.level_field],n_left:t[f.left_field],n_right:t[f.right_field]}:{nodeid:i,n_level:t[f.level_field],parentid:t[f.parent_id_field]}}),e(this).trigger("reloadGrid"),t[f.loaded]=!0,d.setGridParam.call(e(this),{postData:"nested"===c.treeGridModel?{nodeid:"",n_level:"",n_left:"",n_right:""}:{nodeid:"",n_level:"",parentid:""}})),l.call(this,"afterExpandNode",{rowid:i,item:t})}}})},collapseNode:function(t){return this.each(function(){var i,d=this.p;if(this.grid&&d.treeGrid){var s=d.treeReader.expanded_field;if(t[s]){var o=r(t,d.localReader.id);if(!l.call(this,"beforeCollapseNode",{rowid:o,item:t}))return;t[s]=!1,i=n(d,t),e("#"+d.idPrefix+a(o),this.grid.bDiv).find("div.treeclick").removeClass(i.expanded).addClass(i.common).addClass(i.collapsed),(!0===d.unloadNodeOnCollapse||e.isFunction(d.unloadNodeOnCollapse)&&d.unloadNodeOnCollapse.call(this,t))&&(t[d.treeReader.loaded]=!1,e(this).jqGrid("delTreeNode",o,!0)),l.call(this,"afterCollapseNode",{rowid:o,item:t})}}})},SortTree:function(i,l,n,s){return this.each(function(){var o=this,c=o.p,f=e(o);if(o.grid&&c.treeGrid){var h,p,u,v=[],g=d.getRootNodes.call(f),_=t.from.call(o,g);_.orderBy(i,l,n,s);var R=_.select();for(h=0,p=R.length;h<p;h++)u=R[h],v.push(u),d.collectChildrenSortTree.call(f,v,u,i,l,n,s);e.each(v,function(t){var i=r(this,c.localReader.id);e(o.rows[t]).after(f.find(">tbody>tr#"+a(i)))})}})},collectChildrenSortTree:function(r,i,a,l,n,s){return this.each(function(){var o=e(this);if(this.grid&&this.p.treeGrid){var c,f,h,p=d.getNodeChildren.call(o,i),u=t.from.call(this,p);u.orderBy(a,l,n,s);var v=u.select();for(c=0,f=v.length;c<f;c++)h=v[c],r.push(h),d.collectChildrenSortTree.call(o,r,h,a,l,n,s)}})},setTreeRow:function(t,r){var i=!1;return this.each(function(){this.grid&&this.p.treeGrid&&(i=d.setRowData.call(e(this),t,r))}),i},delTreeNode:function(r,i){return this.each(function(){var a,l,n,s,o,c=this.p,f=c.localReader.id,h=e(this),p=c.treeReader.left_field,u=c.treeReader.right_field;if(this.grid&&c.treeGrid){var v=c._index[r];if(void 0!==v){l=(a=parseInt(c.data[v][u],10))-parseInt(c.data[v][p],10)+1;var g=d.getFullTreeNode.call(h,c.data[v]);if(g.length>0)for(o=0;o<g.length;o++)i&&r===g[o][f]||d.delRowData.call(h,g[o][f]);if("nested"===c.treeGridModel){if((n=t.from.call(this,c.data).greater(p,a,{stype:"integer"}).select()).length)for(s in n)n.hasOwnProperty(s)&&(n[s][p]=parseInt(n[s][p],10)-l);if((n=t.from.call(this,c.data).greater(u,a,{stype:"integer"}).select()).length)for(s in n)n.hasOwnProperty(s)&&(n[s][u]=parseInt(n[s][u],10)-l)}}}})},addChildNode:function(r,i,a,l){return this.each(function(){if(a){var n,s,o,c,f,h,p,u=this.p,v=e(this),g=d.getInd,_=u.treeIcons.minus+" tree-minus",R=i,w=u.treeReader.expanded_field,I=u.treeReader.leaf_field,m=u.treeReader.level_field,x=u.treeReader.parent_id_field,y=u.treeReader.left_field,G=u.treeReader.right_field,N=u.treeReader.loaded;void 0===l&&(l=!1),null==r&&(r=t.randId());var C=g.call(v,i);if(h=!1,void 0===i||null===i||""===i)i=null,R=null,n="last",c=u.tree_root_level;else{n="after",s=u._index[i],o=u.data[s],i=o[u.localReader.id],f=g.call(v,i),c=parseInt(o[m],10)+1;var b=d.getFullTreeNode.call(v,o);if(b.length){var P,j,M;for(P=0;P<b.length;P++)M=b[P][u.localReader.id],(j=g.call(v,M))>f&&(f=j,R=M)}o[I]&&(h=!0,o[w]=!0,e(this.rows[C]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(u.treeIcons.leaf+" tree-leaf").addClass(u.treeIcons.commonIconClass).addClass(_),u.data[s][I]=!1,o[N]=!0)}if(void 0===a[w]&&(a[w]=!1),void 0===a[N]&&(a[N]=!1),a[m]=c,void 0===a[I]&&(a[I]=!0),"adjacency"===u.treeGridModel&&(a[x]=i),"nested"===u.treeGridModel){var T,S;if(null!==i){if(p=parseInt(o[G],10),(T=t.from.call(this,u.data).greaterOrEquals(G,p,{stype:"integer"}).select()).length)for(S in T)T.hasOwnProperty(S)&&(T[S][y]=T[S][y]>p?parseInt(T[S][y],10)+2:T[S][y],T[S][G]=T[S][G]>=p?parseInt(T[S][G],10)+2:T[S][G]);a[y]=p,a[G]=p+1}else{if(p=parseInt(d.getCol.call(v,G,!1,"max"),10),(T=t.from.call(this,u.data).greater(y,p,{stype:"integer"}).select()).length)for(S in T)T.hasOwnProperty(S)&&(T[S][y]=parseInt(T[S][y],10)+2);if((T=t.from.call(this,u.data).greater(G,p,{stype:"integer"}).select()).length)for(S in T)T.hasOwnProperty(S)&&(T[S][G]=parseInt(T[S][G],10)+2);a[y]=p+1,a[G]=p+2}}(null===i||d.isNodeLoaded.call(v,o)||h)&&d.addRowData.call(v,r,a,n,R),o&&!o[w]&&l&&e(this.rows[C]).find("div.treeclick").click()}})}})});
//# sourceMappingURL=grid.treegrid.js.map