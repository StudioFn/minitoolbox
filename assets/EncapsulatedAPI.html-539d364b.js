import{_ as t,X as p,Y as e,Z as n,$ as s,a0 as i,a2 as c,G as o}from"./framework-8b8a807b.js";const l={},u=n("h1",{id:"封装游戏api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#封装游戏api","aria-hidden":"true"},"#"),s(" 封装游戏API")],-1),d=n("br",null,null,-1),k={href:"https://ycbrmsn.com/",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="封装背包api" tabindex="-1"><a class="header-anchor" href="#封装背包api" aria-hidden="true">#</a> 封装背包API</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--[[ 封装背包API v1.0.0
  create by 莫小仙 on 2022-06-04
]]</span>
BackpackAPI <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token comment">--[[
  @param  {integer} bartype: 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 道具格起始ID，nil表示获取失败
  @return {integer | nil} 道具格末尾ID，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getBackpackBarIDRange</span> <span class="token punctuation">(</span>bartype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getBackpackBarIDRange</span><span class="token punctuation">(</span>bartype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取道具背包栏ID范围&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 背包栏大小，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getBackpackBarSize</span> <span class="token punctuation">(</span>bartype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getBackpackBarSize</span><span class="token punctuation">(</span>bartype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取道具背包栏大小&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @param  {integer} itemid 道具id
  @param  {integer | nil} num 道具数量，默认为1
  @param  {integer | nil} durability 耐久度，默认为满
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">setGridItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">,</span> durability<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">setGridItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">,</span> durability<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置背包格道具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,num=&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> <span class="token string">&#39;,durability=&#39;</span><span class="token punctuation">,</span> durability<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @param  {integer | nil} num 道具数量，默认全部
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">removeGridItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">removeGridItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;通过道具格移除道具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> <span class="token string">&#39;,num=&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer | nil} num 道具数量，默认全部
  @return {integer | nil} 成功移除数量，nil表示移除失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">removeGridItemByItemID</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">removeGridItemByItemID</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;通过道具id移除道具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,num=&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">clearPack</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">clearPack</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;清空指定背包栏&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">clearAllPack</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">clearAllPack</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;清空全部背包栏&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridsrc 原背包栏id
  @param  {integer} griddst 目标背包栏id
  @param  {integer | nil} num 道具数量，默认全部
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">moveGridItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridsrc<span class="token punctuation">,</span> griddst<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">moveGridItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridsrc<span class="token punctuation">,</span> griddst<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;移动背包道具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridsrc=&#39;</span><span class="token punctuation">,</span> gridsrc<span class="token punctuation">,</span> <span class="token string">&#39;,griddst=&#39;</span><span class="token punctuation">,</span> griddst<span class="token punctuation">,</span> <span class="token string">&#39;,num=&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridsrc 原背包栏id
  @param  {integer} griddst 目标背包栏id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">swapGridItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridsrc<span class="token punctuation">,</span> griddst<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">swapGridItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridsrc<span class="token punctuation">,</span> griddst<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;交换背包道具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridsrc=&#39;</span><span class="token punctuation">,</span> gridsrc<span class="token punctuation">,</span> <span class="token string">&#39;,griddst=&#39;</span><span class="token punctuation">,</span> griddst<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer | nil} num 道具数量，默认为1
  @return {boolean} 是否有足够空间存放道具
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">enoughSpaceForItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">enoughSpaceForItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @return {integer | nil} 背包能存放的道具剩余总数量，nil表示计算失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">calcSpaceNumForItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">calcSpaceNumForItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;计算背包能存放的道具剩余总数量&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 背包栏有道具的格子数量，nil表示获取信息失败
  @return {table | nil} 有道具的道具格id数组，nil表示获取信息失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getBackpackBarValidList</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getBackpackBarValidList</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包道具栏有道具的道具格信息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 背包栏道具种类数量，nil表示获取信息失败
  @return {table | nil} 各种道具的道具数量数组，nil表示获取信息失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getBackpackBarItemList</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getBackpackBarItemList</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包道具栏道具种类信息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @param  {integer} itemid 道具id
  @return {boolean} 背包里是否有某个道具
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">hasItemByBackpackBar</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">hasItemByBackpackBar</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">,</span> itemid<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @param  {integer} itemid 道具id
  @return {integer | nil} 背包里某个道具总数，nil表示获取失败
  @return {table | nil} 道具所在背包格id数组，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getItemNumByBackpackBar</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getItemNumByBackpackBar</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包道具栏某个道具总数&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 道具id，nil表示获取失败
  @return {integer | nil} 道具数量，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridItemID</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridItemID</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取指定背包栏道具信息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,bartype=&#39;</span><span class="token punctuation">,</span> bartype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {string | nil} 道具名称，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridItemName</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridItemName</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取指定道具格道具名称&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具堆叠数量，nil表示获取失败
  @return {integer | nil} 该道具最大堆叠数量，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridStack</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridStack</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包指定道具格道具堆叠信息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具耐久度，nil表示获取失败
  @return {integer | nil} 该道具最大耐久度，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridDurability</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridDurability</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包指定道具格道具耐久度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具附魔数量，nil表示获取失败
  @return {table | nil} 该道具附魔id数组，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridEnchantList</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridEnchantList</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包指定道具格道具附魔信息&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具工具类型，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridToolType</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridToolType</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包指定道具格道具工具类型&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer} num 道具数量
  @return {integer | nil} 成功添加的数量，nil表示添加失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">addItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">addItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;添加道具到背包&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,num=&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @param  {integer | nil} num 道具数量，默认为全部
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">discardItem</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">discardItem</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> num<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;丢弃背包某个格子里的道具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">,</span> <span class="token string">&#39;,num=&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 道具数量，nil表示获取失败
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">getGridNum</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">getGridNum</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取背包某个格子的道具数量&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,gridid=&#39;</span><span class="token punctuation">,</span> gridid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} resid 资源id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">actEquipUpByResID</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> resid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">actEquipUpByResID</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> resid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;玩家穿上装备&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,resid=&#39;</span><span class="token punctuation">,</span> resid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} equipid 资源id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">actEquipOffByEquipID</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> equipid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">actEquipOffByEquipID</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> equipid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;玩家脱下装备&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,equipid=&#39;</span><span class="token punctuation">,</span> equipid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} resid 资源id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">actCreateEquip</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> resid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">actCreateEquip</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> resid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;创建装备&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,resid=&#39;</span><span class="token punctuation">,</span> resid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} equipid 资源id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> BackpackAPI<span class="token punctuation">.</span><span class="token function">actDestructEquip</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> equipid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Backpack<span class="token punctuation">:</span><span class="token function">actDestructEquip</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> equipid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;销毁装备&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,equipid=&#39;</span><span class="token punctuation">,</span> equipid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装世界api" tabindex="-1"><a class="header-anchor" href="#封装世界api" aria-hidden="true">#</a> 封装世界API</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--[[ 封装世界API v1.0.0
  create by 莫小仙 on 2022-06-12
]]</span>
WorldAPI <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token comment">--[[
  @return {boolean} 是否是白天
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">isDaytime</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">isDaytime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @return {integer | nil} 游戏中当前几点，nil表示获取时间失败
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">getHours</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取游戏中当前几点&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} hour 小时数
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">setHours</span> <span class="token punctuation">(</span>hour<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">setHours</span><span class="token punctuation">(</span>hour<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置游戏中当前几点&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hour=&#39;</span><span class="token punctuation">,</span> hour<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objtype 对象类型：
    0全部
    1玩家OBJ_TYPE.OBJTYPE_PLAYER
    2生物OBJ_TYPE.OBJTYPE_CREATURE
    3掉落物OBJ_TYPE.OBJTYPE_DROPITEM
    4投掷物OBJ_TYPE.OBJTYPE_MISSILE
  @param  {number} x1 区域起点x
  @param  {number} y1 区域起点y
  @param  {number} z1 区域起点z
  @param  {number} x2 区域终点x
  @param  {number} y2 区域终点y
  @param  {number} z2 区域终点z
  @return {integer | nil} 区域内该种对象数量，nil表示获取信息失败
  @return {table | nil} 区域内该种对象的对象id数组，nil表示获取信息失败
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">getActorsByBox</span> <span class="token punctuation">(</span>objtype<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> z1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> z2<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">getActorsByBox</span><span class="token punctuation">(</span>objtype<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> z1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> z2<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取范围内对象&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objtype=&#39;</span><span class="token punctuation">,</span> objtype<span class="token punctuation">,</span> <span class="token string">&#39;,x1=&#39;</span><span class="token punctuation">,</span> x1<span class="token punctuation">,</span> <span class="token string">&#39;,y1=&#39;</span><span class="token punctuation">,</span> y1<span class="token punctuation">,</span> <span class="token string">&#39;,z1=&#39;</span><span class="token punctuation">,</span>
    z1<span class="token punctuation">,</span> <span class="token string">&#39;,x2=&#39;</span><span class="token punctuation">,</span> x2<span class="token punctuation">,</span> <span class="token string">&#39;,y2=&#39;</span><span class="token punctuation">,</span> y2<span class="token punctuation">,</span> <span class="token string">&#39;,z2=&#39;</span><span class="token punctuation">,</span> z2<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">despawnActor</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">despawnActor</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;移除对象&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} x 生成生物的位置x
  @param  {number} y 生成生物的位置y
  @param  {number} z 生成生物的位置z
  @param  {integer} actorid 生物类型id
  @param  {integer} actorCnt 生物数量
  @return {table | nil} 被创建生物的对象id数组，nil表示生成失败
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">spawnCreature</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> actorid<span class="token punctuation">,</span> actorCnt<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">spawnCreature</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> actorid<span class="token punctuation">,</span> actorCnt<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;生成生物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,actorid=&#39;</span><span class="token punctuation">,</span> actorid<span class="token punctuation">,</span>
    <span class="token string">&#39;,actorCnt=&#39;</span><span class="token punctuation">,</span> actorCnt<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">despawnCreature</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">despawnCreature</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;移除生物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} x 生成掉落物的位置x
  @param  {number} y 生成掉落物的位置y
  @param  {number} z 生成掉落物的位置z
  @param  {integer} itemId 道具id
  @param  {integer} itemCnt 道具数量
  @return {integer | nil} 掉落物id，nil表示生成失败
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">spawnItem</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> itemId<span class="token punctuation">,</span> itemCnt<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">spawnItem</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> itemId<span class="token punctuation">,</span> itemCnt<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;在指定位置生成掉落物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,itemId=&#39;</span><span class="token punctuation">,</span> itemId<span class="token punctuation">,</span>
    <span class="token string">&#39;,itemCnt=&#39;</span><span class="token punctuation">,</span> itemCnt<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} x1 区域起点x
  @param  {number} y1 区域起点y
  @param  {number} z1 区域起点z
  @param  {number} x2 区域终点x
  @param  {number} y2 区域终点y
  @param  {number} z2 区域终点z
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">despawnItemByBox</span> <span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> z1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> z2<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">despawnItemByBox</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> z1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> z2<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;通过区域移除掉落物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x1=&#39;</span><span class="token punctuation">,</span> x1<span class="token punctuation">,</span> <span class="token string">&#39;,y1=&#39;</span><span class="token punctuation">,</span> y1<span class="token punctuation">,</span> <span class="token string">&#39;,z1=&#39;</span><span class="token punctuation">,</span> z1<span class="token punctuation">,</span> <span class="token string">&#39;,x2=&#39;</span><span class="token punctuation">,</span> x2<span class="token punctuation">,</span> <span class="token string">&#39;,y2=&#39;</span><span class="token punctuation">,</span> y2<span class="token punctuation">,</span> <span class="token string">&#39;,z2=&#39;</span><span class="token punctuation">,</span> z2<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} objid 掉落物id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">despawnItemByObjid</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">despawnItemByObjid</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;通过id移除掉落物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} shooter 投掷物的主人
  @param  {integer} itemid 投掷物(道具)id
  @param  {number} x 生成投掷物的位置x
  @param  {number} y 生成投掷物的位置y
  @param  {number} z 生成投掷物的位置z
  @param  {number} dstx 投掷物的目标位置x
  @param  {number} dsty 投掷物的目标位置y
  @param  {number} dstz 投掷物的目标位置z
  @param  {number} speed 投掷物的速度
  @return {integer | nil} 投掷物的对象id，nil表示生成失败
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">spawnProjectile</span> <span class="token punctuation">(</span>shooter<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> dstx<span class="token punctuation">,</span> dsty<span class="token punctuation">,</span> dstz<span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">spawnProjectile</span><span class="token punctuation">(</span>shooter<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> dstx<span class="token punctuation">,</span> dsty<span class="token punctuation">,</span> dstz<span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;生成投掷物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shooter=&#39;</span><span class="token punctuation">,</span> shooter<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span>
    y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,dstx=&#39;</span><span class="token punctuation">,</span> dstx<span class="token punctuation">,</span> <span class="token string">&#39;,dsty=&#39;</span><span class="token punctuation">,</span> dsty<span class="token punctuation">,</span> <span class="token string">&#39;,dstz=&#39;</span><span class="token punctuation">,</span> dstz<span class="token punctuation">,</span> <span class="token string">&#39;,speed=&#39;</span><span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} shooter 投掷物的主人
  @param  {integer} itemid 投掷物(道具)id
  @param  {number} x 生成投掷物的位置x
  @param  {number} y 生成投掷物的位置y
  @param  {number} z 生成投掷物的位置z
  @param  {number} dirx 投掷物的运动方向x，如投掷物朝正东方向水平运动，则dirx大于0，diry、dirz等于0
  @param  {number} diry 投掷物的运动方向y
  @param  {number} dirz 投掷物的运动方向z
  @param  {number} speed 投掷物的速度
  @return {integer | nil} 投掷物的对象id，nil表示生成失败
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">spawnProjectileByDir</span> <span class="token punctuation">(</span>shooter<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> dirx<span class="token punctuation">,</span> diry<span class="token punctuation">,</span> dirz<span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">spawnProjectileByDir</span><span class="token punctuation">(</span>shooter<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> dirx<span class="token punctuation">,</span> diry<span class="token punctuation">,</span> dirz<span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;生成投掷物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shooter=&#39;</span><span class="token punctuation">,</span> shooter<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span>
    y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,dirx=&#39;</span><span class="token punctuation">,</span> dirx<span class="token punctuation">,</span> <span class="token string">&#39;,diry=&#39;</span><span class="token punctuation">,</span> diry<span class="token punctuation">,</span> <span class="token string">&#39;,dirz=&#39;</span><span class="token punctuation">,</span> dirz<span class="token punctuation">,</span> <span class="token string">&#39;,speed=&#39;</span><span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {table} pos1 位置1，{ x, y, z }
  @param  {table} pos2 位置2，{ x, y, z }
  @return {number} 位置之间的距离
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">calcDistance</span> <span class="token punctuation">(</span>pos1<span class="token punctuation">,</span> pos2<span class="token punctuation">)</span>
  <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">calcDistance</span><span class="token punctuation">(</span>pos1<span class="token punctuation">,</span> pos2<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} x 特效的位置x
  @param  {number} y 特效的位置y
  @param  {number} z 特效的位置z
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">playParticalEffect</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">playParticalEffect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;在指定位置播放特效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span>
    particleId<span class="token punctuation">,</span> <span class="token string">&#39;,scale=&#39;</span><span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} x 特效的位置x
  @param  {number} y 特效的位置y
  @param  {number} z 特效的位置z
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">stopEffectOnPosition</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">stopEffectOnPosition</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;停止指定位置的特效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {number} x 特效的位置x
  @param  {number} y 特效的位置y
  @param  {number} z 特效的位置z
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">setEffectScaleOnPosition</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">setEffectScaleOnPosition</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置指定位置的特效大小&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span>
    particleId<span class="token punctuation">,</span> <span class="token string">&#39;,scale=&#39;</span><span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {table} pos 播放位置，{ x, y, z }
  @param  {integer} soundId 音效id
  @param  {number} volume 音量，声音大小
  @param  {number} pitch 音调，包括低音、中音、高音的do、rui、mi
  @param  {boolean} isLoop 是否循环播放
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">playSoundEffectOnPos</span> <span class="token punctuation">(</span>pos<span class="token punctuation">,</span> soundId<span class="token punctuation">,</span> volume<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">playSoundEffectOnPos</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> soundId<span class="token punctuation">,</span> volume<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;在指定位置上播放音效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pos=&#39;</span><span class="token punctuation">,</span> pos<span class="token punctuation">,</span> <span class="token string">&#39;,soundId=&#39;</span><span class="token punctuation">,</span> soundId<span class="token punctuation">,</span> <span class="token string">&#39;,volume=&#39;</span><span class="token punctuation">,</span>
    volume<span class="token punctuation">,</span> <span class="token string">&#39;,pitch=&#39;</span><span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> <span class="token string">&#39;,isLoop=&#39;</span><span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {table} pos 播放位置，{ x, y, z }
  @param  {integer} soundId 音效id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> WorldAPI<span class="token punctuation">.</span><span class="token function">stopSoundEffectOnPos</span> <span class="token punctuation">(</span>pos<span class="token punctuation">,</span> soundId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> World<span class="token punctuation">:</span><span class="token function">stopSoundEffectOnPos</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> soundId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;停止指定位置上播放的音效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pos=&#39;</span><span class="token punctuation">,</span> pos<span class="token punctuation">,</span> <span class="token string">&#39;, soundId=&#39;</span><span class="token punctuation">,</span> soundId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装玩家api" tabindex="-1"><a class="header-anchor" href="#封装玩家api" aria-hidden="true">#</a> 封装玩家API</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--[[ 封装玩家API v1.0.0
  create by 莫小仙 on 2022-06-13
]]</span>
PlayerAPI <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} attrtype 属性类型
  @return {number | nil} 属性值，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getAttr</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> attrtype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getAttr</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> attrtype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;玩家属性获取&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,attrtype=&#39;</span><span class="token punctuation">,</span> attrtype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} attrtype 属性类型
  @param  {number} val 属性值
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setAttr</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> attrtype<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setAttr</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> attrtype<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;玩家属性设置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,attrtype=&#39;</span><span class="token punctuation">,</span> attrtype<span class="token punctuation">,</span> <span class="token string">&#39;,val=&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否是房主
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">isMainPlayer</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">isMainPlayer</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @return {integer | nil} 房主迷你号，nil表示没有房主
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getMainPlayerUin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getMainPlayerUin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取本地玩家的uin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 玩家比赛结果TEAM_RESULTS: 
    0胜负未定 TEAM_RESULTS.TEAM_RESULTS_NONE
    1游戏胜利 TEAM_RESULTS.TEAM_RESULTS_WIN
    2游戏结束 TEAM_RESULTS.TEAM_RESULTS_LOSE
    3游戏平局 TEAM_RESULTS.TEAM_RESULTS_DOGFALL
    nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getGameResults</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getGameResults</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取玩家比赛结果&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} result 比赛结果TEAM_RESULTS: 
    0胜负未定 TEAM_RESULTS.TEAM_RESULTS_NONE
    1游戏胜利 TEAM_RESULTS.TEAM_RESULTS_WIN
    2游戏结束 TEAM_RESULTS.TEAM_RESULTS_LOSE
    3游戏平局 TEAM_RESULTS.TEAM_RESULTS_DOGFALL 
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setGameResults</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setGameResults</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置玩家比赛结果&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,result=&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">teleportHome</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">teleportHome</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;传送玩家到出生点&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 道具id，0表示空手，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getCurToolID</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getCurToolID</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取玩家当前手持的物品id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {string | nil} 昵称，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getNickname</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getNickname</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取玩家昵称&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} teamid 队伍id，0~6，0表示无队伍
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setTeam</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> teamid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setTeam</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> teamid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置玩家队伍&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,teamid=&#39;</span><span class="token punctuation">,</span> teamid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 队伍id，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getTeam</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getTeam</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取玩家队伍&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {number | nil} 饱食度，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getFoodLevel</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getFoodLevel</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取当前饱食度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {number} foodLevel 饱食度
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setFoodLevel</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> foodLevel<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setFoodLevel</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> foodLevel<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置玩家饱食度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,foodLevel=&#39;</span><span class="token punctuation">,</span> foodLevel<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 快捷栏序号，0~7，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getCurShotcut</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getCurShotcut</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取当前所用快捷栏键&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {number} cd 冷却时长
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setSkillCD</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> cd<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setSkillCD</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> cd<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置技能CD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,cd=&#39;</span><span class="token punctuation">,</span> cd<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">reviveToPos</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">reviveToPos</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;复活玩家到指定点&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setRevivePoint</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setRevivePoint</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;改变玩家复活点位置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} actid 动作id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">playAct</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">playAct</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;玩家播放动画&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,actid=&#39;</span><span class="token punctuation">,</span> actid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {string} info 飘窗文字
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">notifyGameInfo2Self</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">notifyGameInfo2Self</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;对玩家显示飘窗文字&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,info=&#39;</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {number} yaw 水平旋转角度
  @param  {number} pitch 竖直旋转角度，0为水平方向
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">rotateCamera</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> yaw<span class="token punctuation">,</span> pitch<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">rotateCamera</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> yaw<span class="token punctuation">,</span> pitch<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;旋转玩家镜头&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,yaw=&#39;</span><span class="token punctuation">,</span> yaw<span class="token punctuation">,</span> <span class="token string">&#39;,pitch=&#39;</span><span class="token punctuation">,</span> pitch<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} viewmode 视角模式VIEWPORTTYPE
    0主视角     VIEWPORTTYPE.MAINVIEW
    1背视角     VIEWPORTTYPE.BACKVIEW
    2正视角     VIEWPORTTYPE.FRONTVIEW
    3背视角2    VIEWPORTTYPE.BACK2VIEW
    4俯视角     VIEWPORTTYPE.TOPVIEW
    5自定义视角 VIEWPORTTYPE.CUSTOMVIEW
  @param  {boolean} islock 是否锁定
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">changeViewMode</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> viewmode<span class="token punctuation">,</span> islock<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">changeViewMode</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> viewmode<span class="token punctuation">,</span> islock<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;改变玩家视角模式&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,viewmode=&#39;</span><span class="token punctuation">,</span> viewmode<span class="token punctuation">,</span> <span class="token string">&#39;,islock=&#39;</span><span class="token punctuation">,</span> islock<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} actionattr 玩家行为属性PLAYERATTR，如设置玩家可移动
  @param  {boolean} switch 是否开启
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setActionAttrState</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setActionAttrState</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置玩家行为属性状态&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,actionattr=&#39;</span><span class="token punctuation">,</span> actionattr<span class="token punctuation">,</span>
    <span class="token string">&#39;,switch=&#39;</span><span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} actionattr 玩家行为属性PLAYERATTR，如设置玩家可移动
  @return {boolean} 是否开启
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">checkActionAttrState</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">checkActionAttrState</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setPosition</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setPosition</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置玩家位置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {number | nil} 位置的x，nil表示获取失败
  @return {number | nil} 位置的y，nil表示获取失败
  @return {number | nil} 位置的z，nil表示获取失败
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">getAimPos</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">getAimPos</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取玩家准星位置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer} attrtype 属性类型
    1道具不可丢弃 PLAYERATTR.ITEM_DISABLE_THROW
    2道具不可掉落 PLAYERATTR.ITEM_DISABLE_DROP
  @param  {boolean} switch 是否开启
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setItemAttAction</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> attrtype<span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setItemAttAction</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> attrtype<span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置玩家道具设置属性&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">,</span> <span class="token string">&#39;,attrtype=&#39;</span><span class="token punctuation">,</span>
    attrtype<span class="token punctuation">,</span> <span class="token string">&#39;,switch=&#39;</span><span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} musicid 音效id
  @param  {number} volume 音量，声音大小
  @param  {number} pitch 音调，包括低音、中音、高音的do、rui、mi
  @param  {boolean} isLoop 是否循环播放
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">playMusic</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> musicid<span class="token punctuation">,</span> volume<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">playMusic</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> musicid<span class="token punctuation">,</span> volume<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;对玩家播放背景音乐&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,musicid=&#39;</span><span class="token punctuation">,</span> musicid<span class="token punctuation">,</span> <span class="token string">&#39;,volume=&#39;</span><span class="token punctuation">,</span>
    volume<span class="token punctuation">,</span> <span class="token string">&#39;,pitch=&#39;</span><span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> <span class="token string">&#39;,isLoop=&#39;</span><span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">stopMusic</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">stopMusic</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;停止播放玩家背景音乐&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> PlayerAPI<span class="token punctuation">.</span><span class="token function">setGameWin</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Player<span class="token punctuation">:</span><span class="token function">setGameWin</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;使玩家获得游戏胜利&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装道具api" tabindex="-1"><a class="header-anchor" href="#封装道具api" aria-hidden="true">#</a> 封装道具API</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--[[ 封装道具API v1.0.0
  create by 莫小仙 on 2022-06-19
]]</span>
ItemAPI <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token comment">--[[
  @param  {integer} itemid 道具id
  @return {string | nil} 道具名称，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ItemAPI<span class="token punctuation">.</span><span class="token function">getItemName</span> <span class="token punctuation">(</span>itemid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Item<span class="token punctuation">:</span><span class="token function">getItemName</span><span class="token punctuation">(</span>itemid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取道具名称&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itemid=&#39;</span><span class="token punctuation">,</span> itemid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {integer | nil} 道具id，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ItemAPI<span class="token punctuation">.</span><span class="token function">getItemId</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Item<span class="token punctuation">:</span><span class="token function">getItemId</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取itemid&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 掉落物id
  @return {integer | nil} 掉落物数量，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ItemAPI<span class="token punctuation">.</span><span class="token function">getDropItemNum</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Item<span class="token punctuation">:</span><span class="token function">getDropItemNum</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取掉落物数量&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装行为者api" tabindex="-1"><a class="header-anchor" href="#封装行为者api" aria-hidden="true">#</a> 封装行为者API</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--[[ 封装行为者API v1.1.0
  create by 莫小仙 on 2022-06-15
  last modified on 2022-08-10
]]</span>
ActorAPI <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {boolean} 对象是否是玩家
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">isPlayer</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">isPlayer</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {integer | nil} 对象类型OBJ_TYPE
    1玩家   OBJ_TYPE.OBJTYPE_PLAYER
    2生物   OBJ_TYPE.OBJTYPE_CREATURE
    3掉落物 OBJ_TYPE.OBJTYPE_DROPITEM
    4投掷物 OBJ_TYPE.OBJTYPE_MISSILE
    nil表示获取类型失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getObjType</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getObjType</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取对象类型&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {boolean} 是否在空中
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">isInAir</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">isInAir</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  获取生物位置。这个函数很容易调用失败，就不打印警告信息了
  @param  {integer} objid 对象id
  @return {number | nil} 位置的x，nil表示在玩家附近找不到对象
  @return {number | nil} 位置的y，nil表示在玩家附近找不到对象
  @return {number | nil} 位置的z，nil表示在玩家附近找不到对象
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getPosition</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getPosition</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {number} 位置的x
  @param  {number} 位置的y
  @param  {number} 位置的z
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setPosition</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setPosition</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置对象位置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">killSelf</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">killSelf</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;杀死自己&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {integer | nil} 朝向，0东1西2北3南，nil表示获取朝向失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getCurPlaceDir</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getCurPlaceDir</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取当前朝向&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @param  {number} speed 速度的倍数
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">tryMoveToPos</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">tryMoveToPos</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;向目标位置移动&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token string">&#39;,speed=&#39;</span><span class="token punctuation">,</span> speed<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {number} hp 生命值
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">addHP</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> hp<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">addHP</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> hp<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;增加当前生命量&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,hp=&#39;</span><span class="token punctuation">,</span> hp<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @return {number | nil} 生命值，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getHP</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getHP</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取当前生命量&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @return {number | nil} 最大生命值，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getMaxHP</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getMaxHP</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取最大生命量&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {number} oxygen 氧气值
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">addOxygen</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> oxygen<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">addOxygen</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> oxygen<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;增加当前氧气值&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,oxygen=&#39;</span><span class="token punctuation">,</span> oxygen<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @return {number | nil} 氧气值，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getOxygen</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getOxygen</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取当前氧气值&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} slot 装备栏id：0头饰 1胸甲 2裤子 3鞋子 4披风 5手中持有的物品
  @param  {integer} enchantId 附魔id
  @param  {integer} enchantLevel 附魔等级
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">addEnchant</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> slot<span class="token punctuation">,</span> enchantId<span class="token punctuation">,</span> enchantLevel<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">addEnchant</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> slot<span class="token punctuation">,</span> enchantId<span class="token punctuation">,</span> enchantLevel<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;增加装备附魔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,slot=&#39;</span><span class="token punctuation">,</span> slot<span class="token punctuation">,</span> <span class="token string">&#39;,enchantId=&#39;</span><span class="token punctuation">,</span> enchantId<span class="token punctuation">,</span>
    <span class="token string">&#39;,enchantLevel=&#39;</span><span class="token punctuation">,</span> enchantLevel<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} slot 装备栏id：0头饰 1胸甲 2裤子 3鞋子 4披风 5手中持有的物品
  @param  {integer} enchantId 附魔id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">removeEnchant</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> slot<span class="token punctuation">,</span> enchantId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">removeEnchant</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> slot<span class="token punctuation">,</span> enchantId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;移除装备附魔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,slot=&#39;</span><span class="token punctuation">,</span> slot<span class="token punctuation">,</span> <span class="token string">&#39;,enchantId=&#39;</span><span class="token punctuation">,</span> enchantId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {number} yaw 水平角度
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setFaceYaw</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> yaw<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setFaceYaw</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> yaw<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置actor原地旋转偏移角度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,yaw=&#39;</span><span class="token punctuation">,</span> yaw<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {number | nil} 水平角度，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getFaceYaw</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getFaceYaw</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取actor原地旋转偏移角度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {number} offset 转动角度
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">turnFaceYaw</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">turnFaceYaw</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;转动actor横向偏移角度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,offset=&#39;</span><span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {number} pitch 与水平方向的夹角
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setFacePitch</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> pitch<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setFacePitch</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> pitch<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置actor视角仰望角度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,pitch=&#39;</span><span class="token punctuation">,</span> pitch<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {number | nil} 与水平方向的夹角，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getFacePitch</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getFacePitch</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取actor视角仰望角度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {number} offset 转动角度
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">turnFacePitch</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">turnFacePitch</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;转动actor仰望偏移角度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,offset=&#39;</span><span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">playBodyEffect</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">playBodyEffect</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;播放特效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">stopBodyEffect</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">stopBodyEffect</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;停止特效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {boolean} bkill 是否显示被击败效果
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">clearActorWithId</span> <span class="token punctuation">(</span>actorid<span class="token punctuation">,</span> bkill<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">clearActorWithId</span><span class="token punctuation">(</span>actorid<span class="token punctuation">,</span> bkill<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;清除生物ID为actorid的生物&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;actorid=&#39;</span><span class="token punctuation">,</span> actorid<span class="token punctuation">,</span> <span class="token string">&#39;,bkill=&#39;</span><span class="token punctuation">,</span> bkill<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {integer} attacktype 伤害类型HURTTYPE
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setAttackType</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> attacktype<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setAttackType</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> attacktype<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置伤害类型&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,attacktype=&#39;</span><span class="token punctuation">,</span> attacktype<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {integer} immunetype 伤害类型HURTTYPE
  @param  {boolean} isadd 是否免疫
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setImmuneType</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> immunetype<span class="token punctuation">,</span> isadd<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setImmuneType</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> immunetype<span class="token punctuation">,</span> isadd<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置免疫伤害类型&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,immunetype=&#39;</span><span class="token punctuation">,</span> immunetype<span class="token punctuation">,</span> <span class="token string">&#39;,isadd=&#39;</span><span class="token punctuation">,</span> isadd<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} mountobjid 被骑乘生物id
  @param  {integer} posindex 骑乘位
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">mountActor</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> mountobjid<span class="token punctuation">,</span> posindex<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">mountActor</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> mountobjid<span class="token punctuation">,</span> posindex<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;登上、脱离载具&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,mountobjid=&#39;</span><span class="token punctuation">,</span> mountobjid<span class="token punctuation">,</span> <span class="token string">&#39;,posindex=&#39;</span><span class="token punctuation">,</span> posindex<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} actionattr 生物行为类型，如可被杀死
  @param  {integer} switch 是否开启
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setActionAttrState</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setActionAttrState</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置生物行为状态&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,actionattr=&#39;</span><span class="token punctuation">,</span> actionattr<span class="token punctuation">,</span> <span class="token string">&#39;,switch=&#39;</span><span class="token punctuation">,</span> switch<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} actionattr 生物行为类型，如可被杀死
  @return {boolean | nil} 生物行为类型是否开启，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getActionAttrState</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getActionAttrState</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actionattr<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取生物行为状态&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,actionattr=&#39;</span><span class="token punctuation">,</span> actionattr<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @param  {boolean} cancontrol 是否可控制移动
  @param  {boolean} bshowtip 是否显示提示
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">tryNavigationToPos</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> cancontrol<span class="token punctuation">,</span> bshowtip<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">tryNavigationToPos</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> cancontrol<span class="token punctuation">,</span> bshowtip<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;寻路到目标位置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">,</span>
    <span class="token string">&#39;,cancontrol=&#39;</span><span class="token punctuation">,</span> cancontrol<span class="token punctuation">,</span> <span class="token string">&#39;,bshowtip=&#39;</span><span class="token punctuation">,</span> bshowtip<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @return {integer | nil} 被骑乘生物的objid，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getRidingActorObjId</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getRidingActorObjId</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取骑乘生物的objid&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">playBodyEffectById</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">playBodyEffectById</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;在指定Actor身上播放特效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span> particleId<span class="token punctuation">,</span>
    <span class="token string">&#39;,scale=&#39;</span><span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">stopBodyEffectById</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">stopBodyEffectById</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;停止指定Actor身上的特效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span> particleId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setBodyEffectScale</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setBodyEffectScale</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> particleId<span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置指定Actor身上的特效大小&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,particleId=&#39;</span><span class="token punctuation">,</span> particleId<span class="token punctuation">,</span>
    <span class="token string">&#39;,scale=&#39;</span><span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} soundId 音效id
  @param  {number} volume 音量，声音大小
  @param  {number} pitch 音调，包括低音、中音、高音的do、rui、mi
  @param  {boolean} isLoop 是否循环播放
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">playSoundEffectById</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> soundId<span class="token punctuation">,</span> volume<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">playSoundEffectById</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> soundId<span class="token punctuation">,</span> volume<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;在指定Actor身上播放音效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,soundId=&#39;</span><span class="token punctuation">,</span> soundId<span class="token punctuation">,</span> <span class="token string">&#39;,volume=&#39;</span><span class="token punctuation">,</span>
    volume<span class="token punctuation">,</span> <span class="token string">&#39;,pitch=&#39;</span><span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> <span class="token string">&#39;,isLoop=&#39;</span><span class="token punctuation">,</span> isLoop<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} soundId 音效id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">stopSoundEffectById</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> soundId<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">stopSoundEffectById</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> soundId<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;停止指定Actor身上的音效&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,soundId=&#39;</span><span class="token punctuation">,</span> soundId<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {number} x 速度的x
  @param  {number} y 速度的y
  @param  {number} z 速度的z
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">appendSpeed</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">appendSpeed</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;给actor附加一个速度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,x=&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">&#39;,y=&#39;</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token string">&#39;,z=&#39;</span><span class="token punctuation">,</span> z<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {number | nil} 朝向的x，nil表示获取朝向失败
  @return {number | nil} 朝向的y，nil表示获取朝向失败
  @return {number | nil} 朝向的z，nil表示获取朝向失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getFaceDirection</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getFaceDirection</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取actor朝向&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {number | nil} 眼睛的高度，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getEyeHeight</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getEyeHeight</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取眼睛高度&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {number | nil} 位置的x，nil表示获取失败
  @return {number | nil} 位置的y，nil表示获取失败
  @return {number | nil} 位置的z，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getEyePosition</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getEyePosition</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取眼睛位置&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @return {number | nil} 身体尺寸，nil表示获取失败
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">getBodySize</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callResultMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">getBodySize</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;获取身体尺寸&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 对象id
  @param  {integer} actid 动作id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">playAct</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">playAct</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> actid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;播放动作&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,actid=&#39;</span><span class="token punctuation">,</span> actid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {boolean} bshow 是否显示
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">shownickname</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bshow<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">shownickname</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> bshow<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置昵称显示&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,bshow=&#39;</span><span class="token punctuation">,</span> bshow<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {string} nickname 昵称
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">setnickname</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> nickname<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">setnickname</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> nickname<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;设置昵称&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,nickname=&#39;</span><span class="token punctuation">,</span> nickname<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 迷你号
  @param  {integer} toobjid 被伤害的玩家迷你号或生物id
  @param  {number} hp 生命值
  @param  {integer} attackType 伤害类型HURTTYPE
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">playerHurt</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> toobjid<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> attackType<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">playerHurt</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> toobjid<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> attackType<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;使玩家对（玩家或生物）造成伤害&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,toobjid=&#39;</span><span class="token punctuation">,</span> toobjid<span class="token punctuation">,</span> <span class="token string">&#39;,hp=&#39;</span><span class="token punctuation">,</span> hp<span class="token punctuation">,</span>
    <span class="token string">&#39;,attackType=&#39;</span><span class="token punctuation">,</span> attackType<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 生物id
  @param  {integer} toobjid 被伤害的玩家迷你号或生物id
  @param  {number} hp 生命值
  @param  {integer} attackType 伤害类型HURTTYPE
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">actorHurt</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> toobjid<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> attackType<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">actorHurt</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> toobjid<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> attackType<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;使生物对（玩家或生物）造成伤害&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,toobjid=&#39;</span><span class="token punctuation">,</span> toobjid<span class="token punctuation">,</span> <span class="token string">&#39;,hp=&#39;</span><span class="token punctuation">,</span> hp<span class="token punctuation">,</span>
    <span class="token string">&#39;,attackType=&#39;</span><span class="token punctuation">,</span> attackType<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 玩家迷你号/生物id
  @param  {integer} buffid 状态id
  @param  {integer} bufflv 状态等级
  @param  {integer} customticks 帧数，每秒20次
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">addBuff</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> buffid<span class="token punctuation">,</span> bufflv<span class="token punctuation">,</span> customticks<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">addBuff</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> buffid<span class="token punctuation">,</span> bufflv<span class="token punctuation">,</span> customticks<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;增加指定BUFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span> <span class="token string">&#39;,buffid=&#39;</span><span class="token punctuation">,</span> buffid<span class="token punctuation">,</span> <span class="token string">&#39;,bufflv=&#39;</span><span class="token punctuation">,</span> bufflv<span class="token punctuation">,</span>
    <span class="token string">&#39;,customticks=&#39;</span><span class="token punctuation">,</span> customticks<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 玩家迷你号/生物id
  @param  {integer} buffid 状态id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">removeBuff</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> buffid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">removeBuff</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> buffid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;移除指定BUFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">,</span><span class="token string">&#39;,buffid=&#39;</span><span class="token punctuation">,</span> buffid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 玩家迷你号/生物id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">clearAllBuff</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">clearAllBuff</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;清除全部BUFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  @param  {integer} objid 玩家迷你号/生物id
  @return {boolean} 是否成功
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">clearAllBadBuff</span> <span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> YcApiHelper<span class="token punctuation">.</span><span class="token function">callIsSuccessMethod</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">clearAllBadBuff</span><span class="token punctuation">(</span>objid<span class="token punctuation">)</span>
  <span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token string">&#39;清除全部减益BUFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;objid=&#39;</span><span class="token punctuation">,</span> objid<span class="token punctuation">)</span>
<span class="token keyword">end</span>
 
<span class="token comment">--[[
  是否已经有了指定BUFF
  @param  {integer} objid 玩家迷你号/生物id
  @param  {integer} buffid 状态id
  @return {boolean} 是否有
]]</span>
<span class="token keyword">function</span> ActorAPI<span class="token punctuation">.</span><span class="token function">hasBuff</span> <span class="token punctuation">(</span>objid<span class="token punctuation">,</span> buffid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> Actor<span class="token punctuation">:</span><span class="token function">hasBuff</span><span class="token punctuation">(</span>objid<span class="token punctuation">,</span> buffid<span class="token punctuation">)</span> <span class="token operator">==</span> ErrorCode<span class="token punctuation">.</span>OK
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(m,b){const a=o("ExternalLinkIcon");return p(),e("div",null,[u,n("blockquote",null,[n("p",null,[s("感谢莫小仙大佬提供的封装API"),d,n("a",k,[s("莫小仙的网站"),i(a)])])]),r])}const g=t(l,[["render",v],["__file","EncapsulatedAPI.html.vue"]]);export{g as default};
