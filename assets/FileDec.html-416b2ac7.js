import{_ as t,M as p,p as e,q as o,R as n,t as c,N as i,a1 as s}from"./framework-96b046e1.js";const u={},l=s('<h1 id="游戏素材文件解密" tabindex="-1"><a class="header-anchor" href="#游戏素材文件解密" aria-hidden="true">#</a> 游戏素材文件解密</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这是<code>Python</code>文档，并非<code>Lua</code>文档！</p></div><blockquote><p>此脚本用于解密迷你世界的加密图片和音频<br> 使用之前请确保已经安装<code>Python3</code>并配置好环境变量<br><code>Python</code>脚本来自网络，并非本人原创</p></blockquote><h2 id="效果演示" tabindex="-1"><a class="header-anchor" href="#效果演示" aria-hidden="true">#</a> 效果演示</h2>',4),d={href:"https://tatsukimengchen.github.io/devToolbox/docs/development/script/images/rail_detector.zip",target:"_blank",rel:"noopener noreferrer"},r=s(`<p>解密后：</p><p><img src="https://tatsukimengchen.github.io/devToolbox/docs/development/script/images/rail_detector.png" alt="解密后"></p><h2 id="用到的库" tabindex="-1"><a class="header-anchor" href="#用到的库" aria-hidden="true">#</a> 用到的库</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> struct
<span class="token keyword">import</span> six
<span class="token keyword">import</span> shutil
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>six</code>库需要手动安装，请在<code>命令行</code>中输入以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install six
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><ol><li>新建文件夹，将<code>Python</code>脚本和需要解密的图片一并放在文件夹里，可同时解密多张图片</li><li>运行<code>Python</code>脚本</li><li>脚本运行完毕后会在当前目录下生成一个名为<code>_decrypted</code>的文件夹，解密的图片就在里面</li></ol><h2 id="python脚本" tabindex="-1"><a class="header-anchor" href="#python脚本" aria-hidden="true">#</a> <code>Python</code>脚本</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> struct
<span class="token keyword">import</span> six
<span class="token keyword">import</span> shutil

D8_KEY <span class="token operator">=</span> <span class="token string">b&quot;\\xd6\\x02\\x08\\x00\\xf4\\xfe\\xff\\x3f\\x01\\x00\\x00\\x00\\xd0\\xca\\x01\\x00&quot;</span>
OUT_PATH <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>curdir<span class="token punctuation">,</span> <span class="token string">&quot;_decrypted&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">decrypt_folder</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> file_name <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> file_name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>file_name<span class="token punctuation">)</span><span class="token punctuation">:</span>
                decrypt_folder<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> file_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">try</span><span class="token punctuation">:</span>
                    decrypt_file<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> file_name<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">except</span><span class="token punctuation">:</span>
                    decrypt_folder<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path<span class="token punctuation">,</span> file_name<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">decrypt_file</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        sign <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> sign <span class="token operator">==</span> <span class="token string">b&quot;\\xff\\xd9\\xff\\xd8&quot;</span><span class="token punctuation">:</span>
            file_size <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>getsize<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            enc_size <span class="token operator">=</span> struct<span class="token punctuation">.</span>unpack<span class="token punctuation">(</span><span class="token string">&quot;&gt;i&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            enc_data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span>enc_size<span class="token punctuation">)</span>
            no_enc_data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span>file_size <span class="token operator">-</span> enc_size <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">)</span>

            out_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>OUT_PATH<span class="token punctuation">,</span> path<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>out_path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>out_path<span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>out_path<span class="token punctuation">,</span> <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> of<span class="token punctuation">:</span>
                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> enc_size<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    dec_byte <span class="token operator">=</span> enc_data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> D8_KEY<span class="token punctuation">[</span>i <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">]</span>
                    of<span class="token punctuation">.</span>write<span class="token punctuation">(</span>six<span class="token punctuation">.</span>int2byte<span class="token punctuation">(</span>dec_byte<span class="token punctuation">)</span><span class="token punctuation">)</span>
                of<span class="token punctuation">.</span>write<span class="token punctuation">(</span>no_enc_data<span class="token punctuation">)</span>

            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Decrypted encrypted file:&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span>

        <span class="token keyword">elif</span> sign <span class="token operator">==</span> <span class="token string">b&quot;\\xff\\xd9\\xff\\xd7&quot;</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Ignored encrypted file:&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span>

        <span class="token keyword">else</span><span class="token punctuation">:</span>
            f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

            out_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>OUT_PATH<span class="token punctuation">,</span> path<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>out_path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>out_path<span class="token punctuation">)</span><span class="token punctuation">)</span>

            shutil<span class="token punctuation">.</span>copyfile<span class="token punctuation">(</span>path<span class="token punctuation">,</span> out_path<span class="token punctuation">)</span>

            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Copied non-encrypted file:&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span>

decrypt_folder<span class="token punctuation">(</span>os<span class="token punctuation">.</span>curdir<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",d,[c("解密前：（由于无法正常显示图片，所以提供下载链接）"),i(a)])]),r])}const h=t(u,[["render",k],["__file","FileDec.html.vue"]]);export{h as default};
