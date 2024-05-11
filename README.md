### Hexlet tests and linter status:
[![Actions Status](https://github.com/akivonen/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/akivonen/frontend-project-46/actions)
[![Actions Status](https://github.com/akivonen/frontend-project-46/actions/workflows/tests.yml/badge.svg)](https://github.com/akivonen/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/5074c110b97976b17441/maintainability)](https://codeclimate.com/github/akivonen/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5074c110b97976b17441/test_coverage)](https://codeclimate.com/github/akivonen/frontend-project-46/test_coverage)
<h2 id="description">Description</h2>
<p>Difference Finder is a program that determines the difference between two data structures. This is a common task for which there are numerous online services, for example, <a href="http://www.jsondiff.com/" target="_blank">http://www.jsondiff.com/</a>. This mechanism is used when outputting tests or tracking changes in configuration files.</p>
<p>Utility Features:</p>
<ul>
<li>Support for different input formats: YAML, JSON</li>
<li>Output in plain text, stylish, and JSON format</li>
</ul>
<p>Usage example:</p>
<pre class="hljs"><code class="bash"><span style="color: #999988;font-style: italic"># plain format</span>
gendiff <span style="color: #000080">--format</span> plain path/to/file.yml another/path/file.json

Property <span style="color: #d14">'common.follow'</span> was added with value: <span style="color: #0086B3">false
</span>Property <span style="color: #d14">'group1.baz'</span> was updated. From <span style="color: #d14">'bas'</span> to <span style="color: #d14">'bars'</span>
Property <span style="color: #d14">'group2'</span> was removed

<span style="color: #999988;font-style: italic"># stylish format</span>
gendiff filepath1.json filepath2.json

<span style="color: #000000;font-weight: bold">{</span>
  + follow: <span style="color: #0086B3">false
    </span>setting1: Value 1
  - setting2: 200
  - setting3: <span style="color: #0086B3">true</span>
  + setting3: <span style="color: #000000;font-weight: bold">{</span>
        key: value
    <span style="color: #000000;font-weight: bold">}</span>
  + setting4: blah blah
  + setting5: <span style="color: #000000;font-weight: bold">{</span>
        key5: value5
    <span style="color: #000000;font-weight: bold">}</span>
<span style="color: #000000;font-weight: bold">}</span>
</code></pre>
