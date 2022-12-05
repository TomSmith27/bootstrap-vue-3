import{_ as t,o as e,c as o,a,b as n,d as p,e as i,r as l}from"./app.f4e57799.js";const c={},u=a("h1",{id:"directives",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#directives","aria-hidden":"true"},"#"),n(" Directives")],-1),r=a("p",null,[a("code",null,"Vue3"),n(" supports using custom directives, here you can find a list of directives from this package.")],-1),d={href:"https://vuejs.org/guide/reusability/custom-directives.html#introduction",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="tooltip" tabindex="-1"><a class="header-anchor" href="#tooltip" aria-hidden="true">#</a> Tooltip</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>My title&#39;<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{title: &#39;My title&#39;}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip.hover.top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>My title&#39;<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip.focus.right</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{title: &#39;My title&#39;}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A directive is composed by modifiers and a value, like the examples above. The anatomy of directive is: v-{name}.{modifier1}.{modifier2}.{etc.}={value}.</p><p>So, here we are defining to use the directive &quot;b-tooltip&quot;, with different optional modifiers, and an optional value.</p><h3 id="triggers-modifiers" tabindex="-1"><a class="header-anchor" href="#triggers-modifiers" aria-hidden="true">#</a> Triggers modifiers</h3><p>We can define when we want to trigger a tooltip with the following modifiers.</p><ul><li>click</li><li>hover</li><li>focus</li><li>manual</li></ul><p>If we don&#39;t define any modifier by default is enabled &quot;hover&quot; and &quot;focus&quot;.</p><h3 id="placement-modifiers" tabindex="-1"><a class="header-anchor" href="#placement-modifiers" aria-hidden="true">#</a> Placement modifiers</h3><p>We can define when we want to placement a tooltip with the following modifiers.</p><ul><li>left</li><li>right</li><li>bottom</li><li>top</li></ul><p>If we don&#39;t define any modifier by default is enabled &quot;top&quot;.</p><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> Value</h3><p>A tooltip text could be defined using the value. If we remember the anatomy of a custom directive, we can define at a value. With a value we can use an object, a string, a function, or an element.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>        <span class="token doc-comment comment">/**
         * Default title value if title attribute isn&#39;t present.
         *
         * If a function is given, it will be called with its this reference set
         * to the element that the popover is attached to.
         *
         * <span class="token keyword">@default</span> &#39;&#39;
         */</span>
        title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Element <span class="token operator">|</span> JQuery <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span> <span class="token operator">|</span> Element <span class="token operator">|</span> JQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we want to use an object, we should use the following interface:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ValueObject</span> <span class="token punctuation">{</span>
    delay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// default: 0</span>
    placement<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">;</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    trigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">|</span> <span class="token string">&#39;click&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;hover&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;focus&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;manual&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;click hover&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;click focus&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;hover focus&#39;</span>
            <span class="token operator">|</span> <span class="token string">&#39;click hover focus&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> Delay</h4><p>We can define a delay to display the tooltip, in that case we need to use the object value format, if not by default it&#39;s used 0.</p><h4 id="pitfalls" tabindex="-1"><a class="header-anchor" href="#pitfalls" aria-hidden="true">#</a> Pitfalls</h4><p>When we are using a directive, we have two ways to define the title to use in the tooltip.</p><h5 id="incorrect-use" tabindex="-1"><a class="header-anchor" href="#incorrect-use" aria-hidden="true">#</a> Incorrect use</h5><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip.hover.top</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my title<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>First example it&#39;s using the property from BCard &quot;title&quot;, this property is going to render something like:</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">/&gt;</span></span> // header
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        //something here
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> // footer
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Where our title is going to be attached to a child element, but the custom directive is attached to our parent div with class &quot;card&quot;. So, it&#39;s not going to work, and we are going to see a warning in the developer&#39;s console.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip.hover.top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my title<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here we are not using a string, because is reading ts or js code. So, we need to set a literal string, a variable, function or so on.</p><h5 id="correct-use" tabindex="-1"><a class="header-anchor" href="#correct-use" aria-hidden="true">#</a> Correct use</h5><p>In that cases is working when the title is created in the root component, like this example:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-b-tooltip.hover.top</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 //something
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    //something here
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In that case, the directive is detecting the title value, and it&#39;s going to be used correctly.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span> <span class="token attr-name">v-b-tooltip.hover.top</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>my title&#39;<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We should use the value type when the component is not setting to the root component a title. Notice that we should use ts/js code, a variable and so on.</p>`,35);function k(m,h){const s=l("ExternalLinkIcon");return e(),o("div",null,[u,r,a("p",null,[n("More information about custom directives in "),a("a",d,[n("here"),p(s)]),n(".")]),v])}var b=t(c,[["render",k],["__file","directives.html.vue"]]);export{b as default};
