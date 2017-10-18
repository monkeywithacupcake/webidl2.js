# Change Log

## [v4.1.0](https://github.com/w3c/webidl2.js/tree/v4.1.0) (2017-07-04)
[Full Changelog](https://github.com/w3c/webidl2.js/compare/v4.0.0...v4.1.0)

**Closed issues:**

- Parsing error for annonated inner types of generic types [\#71](https://github.com/w3c/webidl2.js/issues/71)

**Merged pull requests:**

- Support TypeWithExtendedAttributes on generics [\#75](https://github.com/w3c/webidl2.js/pull/75) ([SaschaNaz](https://github.com/SaschaNaz))

## [v4.0.0](https://github.com/w3c/webidl2.js/tree/v4.0.0) (2017-06-27)
[Full Changelog](https://github.com/w3c/webidl2.js/compare/v3.0.2...v4.0.0)

**Closed issues:**

- Remove serializer-related productions [\#73](https://github.com/w3c/webidl2.js/issues/73)
- Records don't seem to be working right [\#72](https://github.com/w3c/webidl2.js/issues/72)
- Document namespace member output [\#59](https://github.com/w3c/webidl2.js/issues/59)

**Merged pull requests:**

- BREAKING CHANGE: remove serializers \(closes \#73\) [\#74](https://github.com/w3c/webidl2.js/pull/74) ([marcoscaceres](https://github.com/marcoscaceres))
- Add documentation for namespaces [\#70](https://github.com/w3c/webidl2.js/pull/70) ([SaschaNaz](https://github.com/SaschaNaz))

## [v3.0.2](https://github.com/w3c/webidl2.js/tree/v3.0.2) (2017-05-29)
[Full Changelog](https://github.com/w3c/webidl2.js/compare/v3.0.1...v3.0.2)

**Closed issues:**

- Whitespace issues [\#64](https://github.com/w3c/webidl2.js/issues/64)

**Merged pull requests:**

- Test for latest LTS/stable node versions [\#69](https://github.com/w3c/webidl2.js/pull/69) ([SaschaNaz](https://github.com/SaschaNaz))

## [v3.0.1](https://github.com/w3c/webidl2.js/tree/v3.0.1) (2017-05-18)
[Full Changelog](https://github.com/w3c/webidl2.js/compare/v2.4.0...v3.0.1)

**Closed issues:**

- Is array syntax dead? [\#66](https://github.com/w3c/webidl2.js/issues/66)
- Remove exceptions support [\#65](https://github.com/w3c/webidl2.js/issues/65)

**Merged pull requests:**

- Fix whitespace error on parsing extended attributes [\#68](https://github.com/w3c/webidl2.js/pull/68) ([SaschaNaz](https://github.com/SaschaNaz))
- Remove deprecated IDL arrays and exceptions [\#67](https://github.com/w3c/webidl2.js/pull/67) ([SaschaNaz](https://github.com/SaschaNaz))

## [v2.4.0](https://github.com/w3c/webidl2.js/tree/v2.4.0) (2017-04-12)
[Full Changelog](https://github.com/w3c/webidl2.js/compare/v2.1.0...v2.4.0)

**Closed issues:**

- Add support for Annotated Types [\#60](https://github.com/w3c/webidl2.js/issues/60)
- Question: Convert WebIDL -\> Javascript [\#56](https://github.com/w3c/webidl2.js/issues/56)
- Get Robin to give us push permissions on npm [\#54](https://github.com/w3c/webidl2.js/issues/54)
- Add support for records [\#53](https://github.com/w3c/webidl2.js/issues/53)
- module not supported? [\#52](https://github.com/w3c/webidl2.js/issues/52)
- Add support for namespaces [\#51](https://github.com/w3c/webidl2.js/issues/51)
- Export is not AMD compatible [\#48](https://github.com/w3c/webidl2.js/issues/48)
- Can't represent large constants [\#21](https://github.com/w3c/webidl2.js/issues/21)

**Merged pull requests:**

- Update webidl2.js [\#63](https://github.com/w3c/webidl2.js/pull/63) ([tqeto](https://github.com/tqeto))
- Remove support for MapClass \(no longer valid in WebIDL\) [\#62](https://github.com/w3c/webidl2.js/pull/62) ([dontcallmedom](https://github.com/dontcallmedom))
- Add support for annotated types [\#61](https://github.com/w3c/webidl2.js/pull/61) ([dontcallmedom](https://github.com/dontcallmedom))
- Support namespaces [\#58](https://github.com/w3c/webidl2.js/pull/58) ([SaschaNaz](https://github.com/SaschaNaz))
- Add support for records [\#57](https://github.com/w3c/webidl2.js/pull/57) ([TimothyGu](https://github.com/TimothyGu))
- Refactor [\#50](https://github.com/w3c/webidl2.js/pull/50) ([marcoscaceres](https://github.com/marcoscaceres))
- feat\(lib\): add AMD export support \(closes \#48\) [\#49](https://github.com/w3c/webidl2.js/pull/49) ([marcoscaceres](https://github.com/marcoscaceres))

## [v2.1.0](https://github.com/w3c/webidl2.js/tree/v2.1.0) (2016-08-12)
**Closed issues:**

- Exception when parsing test/syntax/idl/typedef.widl [\#46](https://github.com/w3c/webidl2.js/issues/46)
- Wrong jsondiffpatch location [\#42](https://github.com/w3c/webidl2.js/issues/42)
- 'npm install' fails on building microtime [\#40](https://github.com/w3c/webidl2.js/issues/40)
- Can't represent union types in typedefs [\#38](https://github.com/w3c/webidl2.js/issues/38)
- tokenise\(\) assumes a specific property enumeration order [\#27](https://github.com/w3c/webidl2.js/issues/27)
- Add support for iterable\<\>, maplike\<\>, setlike\<\> declarations [\#24](https://github.com/w3c/webidl2.js/issues/24)
- WebIDL2 fails to parse `attribute Promise\<DOMString\>\[\] baz` [\#19](https://github.com/w3c/webidl2.js/issues/19)
- Support for ExtendedAttributeIdentList \(current editor's draft\) [\#18](https://github.com/w3c/webidl2.js/issues/18)
- No Licensing Information [\#17](https://github.com/w3c/webidl2.js/issues/17)
- how to regenerate w3c idl files ? [\#14](https://github.com/w3c/webidl2.js/issues/14)
- What is lib/writer.js [\#13](https://github.com/w3c/webidl2.js/issues/13)
- Numerous tests are failing [\#7](https://github.com/w3c/webidl2.js/issues/7)
- Add support for missing types in ServiceWorker [\#5](https://github.com/w3c/webidl2.js/issues/5)
- How can I parse just a function? [\#3](https://github.com/w3c/webidl2.js/issues/3)
- Parser throws on nullable array of nullable array [\#2](https://github.com/w3c/webidl2.js/issues/2)
- Parser throws on nullable array of any [\#1](https://github.com/w3c/webidl2.js/issues/1)

**Merged pull requests:**

- Fix "default": undefined [\#47](https://github.com/w3c/webidl2.js/pull/47) ([mkwtys](https://github.com/mkwtys))
- Replace expect.js with expct [\#45](https://github.com/w3c/webidl2.js/pull/45) ([halton](https://github.com/halton))
- Correct jsondiffpatch location. [\#44](https://github.com/w3c/webidl2.js/pull/44) ([halton](https://github.com/halton))
- Bump microtime to 2.1.1 [\#43](https://github.com/w3c/webidl2.js/pull/43) ([halton](https://github.com/halton))
- Expand writer support [\#39](https://github.com/w3c/webidl2.js/pull/39) ([markandrus](https://github.com/markandrus))
- Accept wider \(but still incomplete\) set of allowed syntax for extended attributes [\#37](https://github.com/w3c/webidl2.js/pull/37) ([mlogan](https://github.com/mlogan))
- Add test for callback with multiple arguments. [\#36](https://github.com/w3c/webidl2.js/pull/36) ([tobie](https://github.com/tobie))
- Iterables [\#34](https://github.com/w3c/webidl2.js/pull/34) ([motiz88](https://github.com/motiz88))
- Allow trailing comma in enum value lists, per spec [\#33](https://github.com/w3c/webidl2.js/pull/33) ([motiz88](https://github.com/motiz88))
- Allow typedefs within interfaces \(behind an opt-in flag\) [\#32](https://github.com/w3c/webidl2.js/pull/32) ([motiz88](https://github.com/motiz88))
- In draft [\#31](https://github.com/w3c/webidl2.js/pull/31) ([othree](https://github.com/othree))
- Add support for extended attributes identifier lists [\#29](https://github.com/w3c/webidl2.js/pull/29) ([tobie](https://github.com/tobie))
- Make `attribute Promise\<T\>\[\] attr;` work. [\#26](https://github.com/w3c/webidl2.js/pull/26) ([jyasskin](https://github.com/jyasskin))
- Parse required dictionary fields. [\#25](https://github.com/w3c/webidl2.js/pull/25) ([jyasskin](https://github.com/jyasskin))
- Define the WebIDL2 property on self rather than window. [\#23](https://github.com/w3c/webidl2.js/pull/23) ([Ms2ger](https://github.com/Ms2ger))
- Teach WebIDL2 to parse \[\] default values. [\#22](https://github.com/w3c/webidl2.js/pull/22) ([jyasskin](https://github.com/jyasskin))
- Support ID list in extended attributes [\#20](https://github.com/w3c/webidl2.js/pull/20) ([othree](https://github.com/othree))
- Make sure that `sequence` property of idl types is set to false if the type is actually `sequence`. [\#16](https://github.com/w3c/webidl2.js/pull/16) ([tobie](https://github.com/tobie))
- Parametrized [\#15](https://github.com/w3c/webidl2.js/pull/15) ([tobie](https://github.com/tobie))
- Add promise support [\#12](https://github.com/w3c/webidl2.js/pull/12) ([tobie](https://github.com/tobie))
- Remove broken coverage support from travis for now. [\#11](https://github.com/w3c/webidl2.js/pull/11) ([tobie](https://github.com/tobie))
- Add support for \[MapClass\(type, type\)\]. [\#10](https://github.com/w3c/webidl2.js/pull/10) ([tobie](https://github.com/tobie))
- Incorporate tests from widlproc\[1\] and remove dependency on said project. [\#9](https://github.com/w3c/webidl2.js/pull/9) ([tobie](https://github.com/tobie))
- README incorrectly recommended updating the widlproc submodule. [\#8](https://github.com/w3c/webidl2.js/pull/8) ([tobie](https://github.com/tobie))
- Fix bug where instrumented version of webidl2 was loaded. [\#6](https://github.com/w3c/webidl2.js/pull/6) ([tobie](https://github.com/tobie))
- Use https:// instead of git:// [\#4](https://github.com/w3c/webidl2.js/pull/4) ([Manishearth](https://github.com/Manishearth))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*