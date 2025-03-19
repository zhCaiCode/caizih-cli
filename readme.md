<!--
 Copyright (c) 2025 caizih
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

### git cz 使用说明 
```text
git cz
 
cz-cli@4.1.2, cz-conventional-changelog@3.2.0
 
#指定commit的类型，约定了feat、fix两个主要type，以及docs、style、build、refactor、revert五个特殊type
? **Select the type of change that you're committing:** fix:   A bug fix
#用于描述改动的范围，格式为项目名/模块名
? **What is the scope of this change (e.g. component or file name): (press enter t**
**o skip)** index.html
#对改动进行简短的描述
? **Write a short, imperative tense description of the change (max 83 chars):**
 (11) add a blank
#对改动进行长的描述
? **Provide a longer description of the change: (press enter to skip)**
#是破坏性的改动吗
? **Are there any breaking changes?** No
#影响了哪个issue吗，如果选是，接下来要输入issue号
? **Does this change affect any open issues?** No

```