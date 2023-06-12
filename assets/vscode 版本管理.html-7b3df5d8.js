import{_ as n,r,o as p,c as l,b as e,d as a,e as g,a as c}from"./app-1abbb6ea.js";const m="/Lin-Note-v2/assets/image-20230602165412789-1685696055119-1-64c93d23.png",h="/Lin-Note-v2/assets/image-20230602165615487-1685696176383-3-c1b6654e.png",_="/Lin-Note-v2/assets/image-20230602165925056-1685696366309-5-a726ee8d.png",v="/Lin-Note-v2/assets/image-20230602170603640-1685696765925-7-05f588c3.png",b="/Lin-Note-v2/assets/image-20230602171346423-1685697227542-9-d88a5361.png",u="/Lin-Note-v2/assets/image-20230602172928587-1685698170449-11-09e00f4d.png",f="/Lin-Note-v2/assets/image-20230602173029855-1685698230902-13-4894a198.png",N="/Lin-Note-v2/assets/image-20230602175721166-1685699842213-15-b04babf0.png",L="/Lin-Note-v2/assets/image-20230602180109535-1685700071070-17-82f09b7b.png",x="/Lin-Note-v2/assets/image-20230602180315252-2073b298.png",k="/Lin-Note-v2/assets/image-20230602180422642-1685700263531-19-dd42b40a.png",y="/Lin-Note-v2/assets/image-20230602180451174-1685700292579-21-cf062bb6.png",q="/Lin-Note-v2/assets/image-20230602180920889-1685700562682-23-23eb688a.png",V="/Lin-Note-v2/assets/image-20230602181026270-1685700627527-25-39843c56.png",w="/Lin-Note-v2/assets/image-20230602181227078-1685700747986-27-40ee8c50.png",B="/Lin-Note-v2/assets/image-20230605164619992-1685954781595-30-4933e52d.png",E="/Lin-Note-v2/assets/image-20230605164419075-2b63da52.png",G="/Lin-Note-v2/assets/image-20230605164751069-3127a0e0.png",J="/Lin-Note-v2/assets/image-20230605172223091-a59b6043.png",s="/Lin-Note-v2/assets/image-20230608164444320-9ee63380.png",i="/Lin-Note-v2/assets/image-20230608164511357-09d62078.png",o="/Lin-Note-v2/assets/image-20230608164643235-2597e44b.png",t="/Lin-Note-v2/assets/image-20230608164733743-948614fc.png",H="/Lin-Note-v2/assets/image-20230608163937573-bc4272bb.png",I="/Lin-Note-v2/assets/image-20230608164132283-295086f1.png",M="/Lin-Note-v2/assets/image-20230608165019028-66ed9e37.png",R="/Lin-Note-v2/assets/image-20230608165206118-02f02d34.png",j="/Lin-Note-v2/assets/image-20230608170257108-be928922.png",A="/Lin-Note-v2/assets/image-20230608170116613-f7332bf3.png",C="/Lin-Note-v2/assets/image-20230608170215362-a43fdd8e.png",S="/Lin-Note-v2/assets/image-20230608173220247-efcef278.png",T={},Y=c('<h1 id="vscode-版本管理" tabindex="-1"><a class="header-anchor" href="#vscode-版本管理" aria-hidden="true">#</a> vscode 版本管理</h1><h2 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置" aria-hidden="true">#</a> vscode 配置</h2><ol><li>vscode 要做可视化版本管理，主要安装两个插件 <code>Git History</code> <code>GitLens</code></li></ol><p><img src="'+m+'" alt="image-20230602165412789"></p><ol start="2"><li>直接搜索就可以找到了，安装完成后，你在最左边可以看到，分支管理图标</li></ol><p><img src="'+h+'" alt="image-20230602165615487"></p>',6),z={start:"3"},D={href:"https://pan.baidu.com/s/1j7lAgJMgN9a7R7cJRdJMrg?pwd=89km",target:"_blank",rel:"noopener noreferrer"},F=c('<p><img src="'+_+'" alt="image-20230602165925056"></p><ol start="4"><li>选择配置文件为 <code>lin</code> 即可完成配置</li></ol><p><img src="'+v+`" alt="image-20230602170603640"></p><h2 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置" aria-hidden="true">#</a> git 配置</h2><ol><li>配置全局用户名、邮箱、密码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span> // 用户名
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;youremail@yourdomain.com&quot;</span> // 邮箱
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.password “abc0506abc” // 密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查看是否配置成功</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><ol><li>拉下远程仓库的代码，先拷贝链接</li></ol><p><img src="`+b+`" alt="image-20230602171346423"></p><ol start="2"><li>克隆远程仓库代码</li></ol><p>git 命令方式 (推荐)</p><p>在本地找个文件夹，使用克隆命令, 克隆命令即可克隆下来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone http://gitlab.gwmvs.com/fsdgasgasg.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vscode 插件克隆代码，点击克隆</p><p><img src="`+u+'" alt="image-20230602172928587"></p><p>输入克隆地址即可，完成克隆</p><p><img src="'+f+'" alt="image-20230602173029855"></p><h3 id="新增分支" tabindex="-1"><a class="header-anchor" href="#新增分支" aria-hidden="true">#</a> 新增分支</h3><p>新增，在原分支上，根据不同的提交记录，新增分支</p><p>当前操作就是在<code>修改域名</code>的提交记录，这个记录上新增新分支</p><p><img src="'+N+'" alt="image-20230602175721166"></p><p>输入分支名称，分支名称通常为，你所需要迭代的 <code>dev + 需求名称</code></p><p><img src="'+L+'" alt="image-20230602180109535"></p><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><p>切换 本地分支 与 远程分支</p><p><img src="'+x+'" alt="image-20230602180315252"></p><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3><p>选择你要的删除的本地分支即可，只能删除本地分支，无法删除远程分支</p><p><img src="'+k+'" alt="image-20230602180422642"></p><p><img src="'+y+'" alt="image-20230602180451174"></p><p><strong>[注]</strong></p><p>vscode 上主要删除本地分支，远程仓库的分支需要上 gitLab 上修改</p><ol start="4"><li>代码上传</li></ol><p><img src="'+q+'" alt="image-20230602180920889"></p><p><img src="'+V+'" alt="image-20230602181026270"></p><p><img src="'+w+'" alt="image-20230602181227078"></p><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><ol><li>选择分支 <code>dev</code> ，将 <code>iteration-2023.06.02</code>，合到 <code>dev</code></li></ol><p>要把代码合到哪个分支，就切换到哪个分支</p><p>当前分支为 <code>dev</code></p><p><img src="'+B+'" alt="image-20230605164619992"></p><p>将 <code>iteration-2023.06.02</code>，合到 <code>dev</code></p><p><img src="'+E+'" alt="image-20230605164419075"></p><p><img src="'+G+'" alt="image-20230605164751069"></p><h2 id="冲突解决" tabindex="-1"><a class="header-anchor" href="#冲突解决" aria-hidden="true">#</a> 冲突解决</h2><p><img src="'+J+'" alt="image-20230605172223091"></p><p>我们可以根据 两份代码更改时间 或 实际产品需求进行确定，保留哪部分的代码，或者都保留</p><p>因为，我们装入了 <code>Git History</code> 这个插件，我们将鼠标放在哪一行就可以知道是谁修改了代码，什么时间修改的，可以便于判断两份代码的提交时间</p><p>便于合并，与追踪问题</p><p>也可以，点击 <strong>比较变更</strong>，查看两份代码的差别，选择要保留哪份代码</p><p>中的 <code>=======</code> 是 <strong>当前代码</strong> 与 <strong>传入代码</strong> 的分割线</p><p><strong>[注]</strong></p><p>多解决几次冲突，就能基本熟悉其操作了</p><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><h3 id="分支命名" tabindex="-1"><a class="header-anchor" href="#分支命名" aria-hidden="true">#</a> 分支命名</h3><ul><li><code>all-test</code> 测试分支</li><li><code>master</code> 生产分支</li><li><code>dev</code> 开发分支</li><li><code>br-bug-fix</code> bug 解决分支</li><li><code>br-emergency-online</code> 紧急上线分支</li></ul><h3 id="开发情况" tabindex="-1"><a class="header-anchor" href="#开发情况" aria-hidden="true">#</a> 开发情况</h3><ol><li>大版本更新开发 (有大需求，大功能，改动较大)</li></ol><p>将 <code>dev</code> 分支复制一个分支下来，在复制下来的那个分支上开发</p><p>命名：<code>dev-迭代版本名称-时间</code></p><p>开发完成之后，先合并到 <code>all-test</code> 分支上，由测试发布到线上测试环境，进行测试，测试完成后</p><p>等最终上线时间，由 <code>dev-迭代版本名称-时间</code>合并到 <code>dev</code>，将 <code>dev</code> 分支合并到 <code>master</code></p><ol start="2"><li>紧急 bug 修复，需求上线</li></ol><p>使用 <code>br-emergency-online</code>，分支进行开发，通常适用于 紧急线上 bug，紧急需求的情况，就在这个分支进行开发</p><p>开发完成后，合并到 <code>all-test</code> 分支上，由测试发布到线上测试环境，进行测试，测试完成后</p><p>等最终上线时间，由 <code>br-emergency-online</code>合并到 <code>dev</code>，将 <code>br-emergency-online</code> 分支合并到 <code>master</code></p><ol start="3"><li>日常更新，优化</li></ol><p>使用 <code>br-bug-fix</code> ，分支进行开发，使用于 平常日常更新优化，比如 改改不重要的小 bug、修改文字、修改一点样式、增加小功能等等</p><p>开发完成后, 合并到 <code>all-test</code> 分支上，由测试发布到线上测试环境，进行测试，测试完成后</p><p>等最终上线时间，由 <code>br-bug-fix</code>合并到 <code>dev</code>，将 <code>br-bug-fix</code> 分支合并到 <code>master</code></p><p><strong>这样做分支管理的优点 ！！！</strong></p><p>大版本更新，如果延期不会影响到，日常更新迭代</p><p>同理，1、2 延期也不会影响其他开发</p><p><strong>为什么都要和到 <code>dev</code> 再到 <code>master</code> ，其他几个分支，而不是直接合并到 <code>master</code>?</strong></p><p>如果出现紧急 bug，可以立马回退 <code>master</code> 分支代码，并使用 <code>dev</code> 分支部署到测试环境进行测试，解决问题</p><p><strong>[注]</strong></p><p>每次版本上线后，都需要把 <code>master</code> 再合到 <code>dev</code></p><p>再将 <code>dev</code> 合到<code>br-bug-fix</code>、<code>br-emergency-online</code></p><h3 id="当前代码暂时存储" tabindex="-1"><a class="header-anchor" href="#当前代码暂时存储" aria-hidden="true">#</a> 当前代码暂时存储</h3><p>选择储藏</p><p><img src="'+s+'" alt="image-20230608164444320"></p><p>将当前代码 储藏起来</p><p><img src="'+i+'" alt="image-20230608164511357"></p><p>拉取代码后，再次应用储藏</p><p><img src="'+o+'" alt="image-20230608164643235"></p><p><img src="'+t+'" alt="image-20230608164733743"></p><h2 id="常见问题解决" tabindex="-1"><a class="header-anchor" href="#常见问题解决" aria-hidden="true">#</a> 常见问题解决</h2><h3 id="_1-本地提交代码了-但是还没提交到远程仓库-想撤回怎么办" tabindex="-1"><a class="header-anchor" href="#_1-本地提交代码了-但是还没提交到远程仓库-想撤回怎么办" aria-hidden="true">#</a> 1. 本地提交代码了，但是还没提交到远程仓库，想撤回怎么办？</h3><p>选择撤销上次提交即可</p><p><img src="'+H+'" alt="image-20230608163937573"></p><h3 id="_2-代码已经提交到远程仓库了-想撤回怎么办" tabindex="-1"><a class="header-anchor" href="#_2-代码已经提交到远程仓库了-想撤回怎么办" aria-hidden="true">#</a> 2. 代码已经提交到远程仓库了，想撤回怎么办？</h3><p>使用 <code>revert commit</code>, 回退这一块代码</p><p><img src="'+I+'" alt="image-20230608164132283"></p><h3 id="_3-我当前分支有代码还没写完-需要切换分支去解决紧急问题怎么办" tabindex="-1"><a class="header-anchor" href="#_3-我当前分支有代码还没写完-需要切换分支去解决紧急问题怎么办" aria-hidden="true">#</a> 3. 我当前分支有代码还没写完，需要切换分支去解决紧急问题怎么办？</h3><p>以下情况，也可以使用同样方法解决</p><ul><li>在当前分支写代码，但是当前分支有人提交了代码，你无法拉取代码，如何解决？</li></ul><p><img src="'+s+'" alt="image-20230608164444320"></p><p>将当前代码 储藏起来</p><p><img src="'+i+'" alt="image-20230608164511357"></p><p>拉取代码后，再次应用储藏</p><p><img src="'+o+'" alt="image-20230608164643235"></p><p><img src="'+t+'" alt="image-20230608164733743"></p><p><strong>[注]</strong></p><p>当然也会导致，冲突情况，需要解决冲突</p><h3 id="_4-写了很多代码-只先提交其中一部分代码到远程仓库怎么办" tabindex="-1"><a class="header-anchor" href="#_4-写了很多代码-只先提交其中一部分代码到远程仓库怎么办" aria-hidden="true">#</a> 4. 写了很多代码，只先提交其中一部分代码到远程仓库怎么办？</h3><p>选择你先提交的代码，点击 + 号，暂存更改</p><p><img src="'+M+'" alt="image-20230608165019028"></p><p>点击加完了，输入提交描述信息，点击提交，同步即可</p><p><img src="'+R+'" alt="image-20230608165206118"></p><h3 id="_5-只将其中当前分支的一部分-合并到其他分支" tabindex="-1"><a class="header-anchor" href="#_5-只将其中当前分支的一部分-合并到其他分支" aria-hidden="true">#</a> 5. 只将其中当前分支的一部分，合并到其他分支</h3><p>当前 <code>master</code> 分支，我想把 <code>dev</code> 中一提交记录的内容，合并到 <code>master</code> 分支上</p><p>可以使用 <code>cherry pick</code></p><ol><li>切换到 <code>master</code> 分支</li><li>选择 <code>dev</code> 分支数据 (dev 分支上的属性需要已经 拉取过的)</li><li>选择 <code>dev</code> 分支记录，<code>cherry pick</code> 到当前分支</li></ol><p><img src="'+j+'" alt="image-20230608170257108"></p><p><img src="'+A+'" alt="image-20230608170116613"><img src="'+C+'" alt="image-20230608170215362"></p><h3 id="_6-多人同个分支-如何进行开发" tabindex="-1"><a class="header-anchor" href="#_6-多人同个分支-如何进行开发" aria-hidden="true">#</a> 6. 多人同个分支，如何进行开发</h3><p>开发前，先 拉取下代码之后，再进行开发</p><p><img src="'+S+'" alt="image-20230608173220247"></p><p>开发后，提交代码, 报错了！</p><p>可能其他人已经在分支上修改代码，可以先将代码进行存储后，先拉代码，再进行提交</p>',122);function K(O,P){const d=r("ExternalLinkIcon");return p(),l("div",null,[Y,e("ol",z,[e("li",null,[e("a",D,[a("各插件集合文件"),g(d)]),a("，下载后，点击导入文件，导入配置文件")])]),F])}const U=n(T,[["render",K],["__file","vscode 版本管理.html.vue"]]);export{U as default};
