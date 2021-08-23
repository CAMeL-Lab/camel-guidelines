# CAMEL POS Schema and Guidelines

## Motivation and Goals:
CAMEL POS is inspired by the ARZATB tagset and guidelines (Maamouri et al., 2012), 
which was based on the PATB guidelines (Maamouri et al., 2009). CAMEL POS 
is designed as a single tagset for both MSA and the dialects with the following goals in 
mind: 

-  Facilitating research on adaptation between MSA and the dialects, 
and among the dialects.
-  Supporting backward compatibility with previously annotated resources.
-  Enforcing a functional morphology analysis that is deeper and more compatible
with Arabic morphosyntactic rules than form-based 
analysis (Alkuhlani and Habash, 2011).

## Overview
The CAMEL POS tags and features are the union of those in MSA and the dialects. The features are available to use when needed, for example, case and state features are used more often in MSA; but on the other hand, dialects tend to have many more clitics than MSA, including non-MSA ones.

One main property of the CAMEL POS tagset that sets it apart from ARZATB is that the morphological features of both gender and number of nominals are annotated functionally (i.e. semantically) (Alkuhlani and Habash, 2011; Smrž, 2007). This decision allows us to assign the features to the baseword without the need to specify the surface form affixes that mark the surface form gender and number. This is not the case in ARZATB, where broken (irregular) plural nouns are tagged as singular because they do not use the sound plural affixes.

Another property is that in the CAMEL POS tagset we omit case and state features for nominals, and voice and mood for verbs when annotating dialectal Arabic as the dialects have lost them completely, except for some high frequency fossilized MSA forms, such as <span dir="rtl">طبعاً</span> 
<span class="caphi">/t. a b 3 a n/</span>[^1] ‘of course’ which retains an indefinite ending.

The main part of the word, that is the baseword, is tagged in the following 
format: `POS.features`, where `POS` is the core POS tag and `features` is the 
possible feature combination that goes with the POS tag, a `.` separates the POS 
from the feature combination. Proclitics, however, get only a `POS` tag since 
they have no features. On the other hand, pronominal enclitics get a similar tag format 
as the baseword (i.e.`PRON.features`).

## Schema details

### Core POS
The following tables show the list of the `POS` tagset used in this schema compared 
with the ones used ARZATB. The tagset is divided into three categories according 
to the D3 tokenization scheme (Habash et al, 2010): proclitics (14 tags), enclitics
(2 tags) and baseword (39 tags). Together with the features, CAMEL POS tagset
maps to ARZATB and retains backward compatibility. It also offers an intuitive 
Arabic scheme that is suitable to use for annotation.

**Proclitics tags**

| CAMEL POS Arabic 	| CAMEL POS     	| ATB POS       	|
|------------------	|---------------	|---------------	|
| أداة_تعريف       	| PART_DET      	| DET           	|
| حرف_عطف          	| CONJ          	| CONJ          	|
| حرف_جر           	| PREP          	| PREP          	|
| أداة_نفي         	| PART_NEG      	| NEG_PART      	|
| أداة_استقبال     	| PART_FUT      	| FUT_PART      	|
| أداة_مضارعة      	| PART_PROG     	| PROG_PART     	|
| أداة_ربط         	| CONJ_SUB      	| SUB_CONJ      	|
| ضمير_إشارة       	| PRON_DEM      	| DEM_PRON      	|
| ضمير_استفهام     	| PRON_INTERROG 	| INTERROG_PRON 	|
| أداة             	| PART          	| PART          	|
| حرف_ربط          	| PART_CONNECT  	| CONNEC_PART   	|
| أداة_توكيد       	| PART_EMPHATIC 	| EMPHATIC_PART 	|
| جواب_شرط         	| PART_RC       	| RC_PART       	|
| أداة_نداء        	| PART_VOC      	| VOC_PART      	|

**Enclitics tags**

| CAMEL POS Arabic 	| CAMEL POS 	| ATB POS           	|
|------------------	|-----------	|-------------------	|
| أداة_نفي         	| PART_NEG  	| NEG_PART          	|
| ضمير             	| PRON      	| *SUFF_DO:\[PGN\]  	|
| ضمير             	| PRON      	| POSS_PRON_[\PGN\] 	|
| ضمير             	| PRON      	| PRON_\[PGN\]      	|

**Baseword tags**

| CAMEL POS Arabic 	| CAMEL POS     	| ATB POS       	|
|------------------	|---------------	|---------------	|
| اسم              	| NOUN          	| NOUN          	|
| اسم_عدد          	| NOUN_NUM      	| NOUN_NUM      	|
| اسم_علم          	| NOUN_PROP     	| NOUN_PROP     	|
| اسم_كم           	| NOUN_QUANT    	| NOUN_QUANT    	|
| صفة              	| ADJ           	| ADJ           	|
| صفة_عدد          	| ADJ_NUM       	| ADJ_NUM       	|
| صفة_مقارنة       	| ADJ_COMP      	| ADJ_COMP      	|
| ظرف              	| ADV           	| ADV           	|
| ظرف_استفهام      	| ADV_INTERROG  	| INTERROG_ADV  	|
| ظرف_موصول        	| ADV_REL       	| REL_ADV       	|
| فعل              	| VERB          	| IV/PV/CV      	|
| شبه_فعل          	| VERB_PSEUDO   	| PSEUDO_VERB   	|
| اسم_فعل          	| VERB_NOM      	| VERB          	|
| ضمير             	| PRON          	| PRON_[PGN]    	|
| ضمير_إشارة       	| PRON_DEM      	| DEM_PRON_[GN] 	|
| ضمير_استفهام     	| PRON_INTERROG 	| INTERROG_PRON 	|
| ضمير_تعجب        	| PRON_EXCLAM   	| EXCLAM_PRON   	|
| ضمير_موصول       	| PRON_REL      	| REL_PRON      	|
| أداة             	| PART          	| PART          	|
| أداة_تعريف       	| PART_DET      	| DET           	|
| أداة_نفي         	| PART_NEG      	| NEG_PART      	|
| أداة_استقبال     	| PART_FUT      	| FUT_PART      	|
| أداة_مضارعة      	| PART_PROG     	| PROG_PART     	|
| أداة_فعل         	| PART_VERB     	| VERB_PART     	|
| أداة_نداء        	| PART_VOC      	| VOC_PART      	|
| أداة_استفهام     	| PART_INTERROG 	| INTERROG_PART 	|
| أداة_استثناء     	| PART_RESTRICT 	| RESTRIC_PART  	|
| أداة_تفصيل       	| PART_FOCUS    	| FOCUS_PART    	|
| أداة_توكيد       	| PART_EMPHATIC 	| EMPHATIC_PART 	|
| جواب_شرط         	| PART_RC       	| RC_PART       	|
| أداة_ربط         	| CONJ_SUB      	| SUB_CONJ      	|
| حرف_جر           	| PREP          	| PREP          	|
| حرف_عطف          	| CONJ          	| CONJ          	|
| أداة_ربط         	| PART_CONNECT  	| CONNEC_PART   	|
| رقم              	| DIGIT         	| NOUN_NUM      	|
| اختصار           	| ABBREV        	| ABBREV        	|
| تعجب             	| INTERJ        	| INTERJ        	|
| أجنبي            	| FORIEGN       	| FOREIGN       	|
| علامة_ترقيم      	| PUNC          	| PUNC          	|


### Features

CAMEL POS provides a full array of features: 

- **A**spect with the values **P**erfective, **I**mperfective and **C**ommand.
- **P**erson with the values **1**st, **2**nd, **3**rd.
- **G**ender with values **M**asculine and **F**eminine. 
- **N**umber with values **S**imgular, **D**ual and **P**lural.
- **S**tate with values **D**efinite, **I**ndefinite and **C**onstruct. 
- **C**ase with values **N**ominative, **G**enitive and **A**ccusative. 
- **V**oice with values **A**ctive and **P**assive.
- **M**ood with values **S**ubjunctive, **I**ndicative and **J**ussive. 

Not all the features mentioned are necessarily relevant to the dialects. In the
full POS tag, the specified values of the different features
will appear in the following order:<br> `<POS>.<A><P><G><N>.<S><C><V><M>`


For a subset of `POS` tags in the baseword category, each tag has a limited 
number of possible feature combinations that is paired with it. Below is the 
list of the `POS` tags that take features and their possible ordered combination.


Note that the below combinations are for the dialects, in the case of MSA, 
nominals take **C**ase and **S**tate, and verbs take **V**oice and
**M**ood in addition to the listed feature combinations.

- **NOUN**, **NOUN\_\***, **ADJ**, **ADJ_\*** All nominals take the combination 
of **G**ender, **N**umber. For example جالس <span class="caphi">/y aa l i s/</span> ‘sitting’ is tagged 
`ADJ.MS` ; In the occasional uses of **S**tate, such as <span dir="rtl">طبعاً</span> 
<span class="caphi">/t. a b 3 a n/</span> ‘of course’ the tag would be `NOUN.MS.I`. 

- **VERB** All verbs take the combination of **A**spect, **P**erson, **G**ender 
and **N**umber. For example <span dir="rtl">يقطع</span> <span class="caphi">/y i g t. a 3/</span> ‘cut’ is tagged as `VERB.I3MS`

- **PRON** All pronouns take the combination of **P**erson, **G**ender and 
**N**umber. For example <span dir="rtl">انتي</span> <span class="caphi">/2 i n t y/</span> ‘you \[fs\]’
is tagged as `PRON.2FS`

- **PRON_DEM** All demonstrative pronouns take the combination of **G**ender 
and **N**umber. For example <span dir="rtl">هاذا</span> <span class="caphi">/h aa dh a/</span> ‘this’ is tagged as `PRON_DEM.3MS`

In cases where a feature is not present, such as gender in verbs of first person 
inflections, the gender feature is simply dropped and does not require a 
placeholder since the possible feature values are ordered and unique. For example
the imperfective 1st person verb <span dir="rtl">أقول</span> <span class="caphi">/2 a g uu l/</span> ‘I say’ will be
tagged as `VERB.I1S`

## Detailed annotation guidelines
Morphological annotation using CAMEL POS assumes that each word is 
tokenized using the D3 tokenization scheme. Therefore, each token gets at least a `POS` tag according to the table above.
In a large-scale full morphological annotation task, additional annotations are usually provided, such as lemmatization, English gloss, amd dialect identification.
In this section we provide detailed guidelines in the context of a comperhensive annotation task.

* * *

### Tokenization

The tokenization scheme recommended when annotating using CAMEL POS is D3.

**D3 Tokenization**
:    D3 tokenizes all clitics: question particle, conjunctions, particles, prepositions, articles, and pronominal enclitics.

**Notes**:

- In the tokenization task, all tokens must be orthographically normalized, that is undoing all of the morphophonemic and orthographic rewrite rules. For example, the word <span dir="rtl">مكتبتها</span> should be tokenized as <span dir="rtl">مكتبة +ها</span> NOT <span dir="rtl">مكتبت +ها</span>
- Remember that clitics are optional to word formation and they include particles and pronouns.

| Tokenization Phenomenon 	| Word Form 	| Tokenization   	| English Gloss               	| Dialect 	|
|-------------------------	|-------------	|----------------	|-----------------------------	|---------	|
| Definite Article        	| للمكتب      	| ل+ ال+ مكتب    	| for the office              	| MSA,GLF,EGY 	|
| Ta Marbuta              	| مكتبتنا     	| مكتبة +نا      	| our library                 	| MSA,GLF,EGY 	|
| Ta Marbuta              	| كاتباها     	| كاتبة +ها      	| she wrote it (deverbal)     	| GLF,EGY 	|
| Alif Maqsura            	| حكاها       	| حكى +ها        	| he recounted it             	| MSA,GLF,EGY 	|
| Hamza Form              	| بهاؤه،بهائه،بهاءه       	| بهاء +ه        	| his glory                   	| MSA,GLF,EGY 	|
| Waw-of-Plurality        	| قالوها      	| قالوا +ها      	| They said it                	| MSA,GLF,EGY 	|
| Various clitics         	| وستجننني    	| و+ س+ تجنن +ني 	| and she will drive me crazy 	| MSA     	|
| Various clitics         	| وهتجننني    	| و+ ه+ تجنن +ني 	| and she will drive me crazy 	| EGY     	|
| Various clitics         	| وبتجننني    	| و+ ب+ تجنن +ني 	| and she will drive me crazy 	| GLF     	|

#### Clitics
Clitics are syntactically independent morphems that are orthographically attached to the baseword. They can be in a number of parts of speech.

**Notes**:

- Clitics may interact with the spelling of the baseword. See the notes above on Tokenization and the [CODA general rules](orthography.md). <!--put link for ortho-->
- Although writers -in dialectal Arabic mostly- tend to attach what is considered as an indirect object clitic with the baseword (verbs, adjectives that are active participles), in the CODA convention they should be separate. For example <span dir="rtl">اجيبلك</span> should be <span dir="rtl">اجيب لك</span>, and <span dir="rtl">جايبلها</span> should be <span dir="rtl">جايب لها</span>. For the list of clitics, please refer to the [CODA seed lexicon](orthography.md#6-coda-seed-lexicon)<!--TODO: link to the new location of the seed lexicon-->

### CAMEL POS tagset


#### Features
Features refer to specific morphosyntactic aspects of the word that are abstracted away in the lemma form. For example, the word <span dir="rtl">أميرات</span> 'princesses' has the lemma <span dir="rtl">أمير</span> 'prince' with the features gender: feminine and number: plural.

**Notes**

-  Features may not necessarily match the form of the word: e.g. <span dir="rtl">حامل</span> 'pregnant' is gender: feminine even though it has no 'Ta marbuta'[^2] ending; and <span dir="rtl">خليفة</span>  'Khalifa (name); caliph' is gender: masculine and number: singular even though it ends with 'Ta marbuta'.
- Some words have plurality to their meaning, but morphosyntactically are singular (collectable plurals). For example, <span dir="rtl">شجر</span> 'trees' is singular because we say <span dir="rtl">شجر طويل</span> 'tall trees' similar to <span dir="rtl">رجل طويل</span> 'a tall man'.
- The assignment of the features is in context (sentence and document) and depends on the morphosyntactic agreement at all times.
- For specific examples and cases, refer to the notes section of the different parts-of-speech.
- Features include gender, number, person, and aspect. Each feature has a number of possible values, see the [full description](#32-features) of the features.
- Features are represented in combinations in our system. The examples in the section are some feature-value pairs.

| Features 	| الخصائص  	| POS 	| قسم الكلام 	| Description<br>الوصف                                                               	|
|----------	|----------	|-----	|------------	|---------------------------------------------------------------------------------	|
| .P3MS    	| ماضي.هو  	| فعل 	| VERB       	| Aspect:(P);Person:(3);Gender:(M);Number:(S)<br> الزمن:ماضي؛الضمير:مفرد مذكر غائب    	|
| .P1P     	| ماضي.أنا 	| فعل 	| VERB       	| Aspect:(P);Person:(1);Gender:unspecified;Number:(S)<br> الزمن:ماضي؛الضمير:جمع متكلم 	|
| .MS      	| هو       	| اسم 	| NOUN       	| Gender:(M);Number:(S)<br> الجنس:مذكر؛العدد:مفرد                                     	|


#### NOUN - <span dir="rtl">اسم</span>

**Common Nouns**
: Common nouns refer to entities and concepts that have a more general reference than proper nouns. Common nouns inflect for prefixes and suffixes of person, gender, number.

**Notes**:

- Some nouns, such as prepositional nouns (<span dir="rtl">عند، بين، أمام</span> ... etc) don't necessarily have clear features.
To assign features for those cases, use a syntactic test for a nonsensical semantic context[^3]. For example, the word <span dir="rtl">أمام</span> can be in a nonsensical construction where you might say <span dir="rtl">الأمام الأول والأمام الثاني للبيت</span>. According to the morphosyntactic agreement, this makes the features for <span dir="rtl">أمام</span> to be gender: M and number:S
- For gender-ambiguous cases, such as <span dir="rtl">طريق</span>, where <span dir="rtl">طريق</span> could be both masculine and feminine depending on the usage (<span dir="rtl">طريق طويل</span> and <span dir="rtl">طريق طويلة</span>). To assign the gender feature, resolve using the context if such is impossible assign it the form-based gender.
- Common nouns include derived such as <span dir="rtl">دباديب</span> and non-derived nouns such as <span dir="rtl">ام</span>.
- Titles are also annotated as common nouns.
- Common nouns also include a set of borrowed nouns.
- In the context of dialectal text annotation, only nouns that appear to have a case ending such as <span dir="rtl">غصبٍ</span> will have state and case feature annotated. The 'case' feature in this situation is not the real case but rather a remnant from the MSA.

**Examples**

Below are examples of inflection tables based on basic paradigms, which means that the inflections are for the complete set of possible morphological features except for clitic features.<br>


**Lemmas with full paradigms**


??? optional-class "MSA: <bdi>مَلِك</bdi> _'King'_"


    | Word Form 	|     Tag    	|             العلامة            	|
    |:---------:	|:----------:	|:-----------------------------:	|
    |    مَلِك    	| NOUN.MS.IU 	| <bdi>     اسم.نكرة.هو    </bdi> 	|
    |    مَلِكٌ    	| NOUN.MS.IN 	| <bdi>  اسم.نكرة.هو.مرفوع </bdi> 	|
    |    مَلِكٍ    	| NOUN.MS.IG 	| <bdi>  اسم.نكرة.هو.مجرور </bdi> 	|
    |    مَلِكاً   	| NOUN.MS.IA 	| <bdi>  اسم.نكرة.هو.منصوب </bdi> 	|
    |    مَلِكُ    	| NOUN.MS.DN 	| <bdi> اسم.معرفة.هو.مرفوع </bdi> 	|
    |    مَلِكُ    	| NOUN.MS.CN 	| <bdi>  اسم.مضاف.هو.مرفوع </bdi> 	|
    |    مَلِكِ    	| NOUN.MS.CG 	| <bdi>  اسم.مضاف.هو.مجرور </bdi> 	|
    |    مَلِكَ    	| NOUN.MS.CA 	| <bdi>  اسم.مضاف.هو.منصوب </bdi> 	|
    |    <bdi>مَلِكَة</bdi>[^4]   	| NOUN.FS.IU 	| <bdi>     اسم.نكرة.هي    </bdi> 	|
    |    مَلِكَةٌ   	| NOUN.FS.IN 	| <bdi>  اسم.نكرة.هي.مرفوع </bdi> 	|
    |    مَلِكَةٍ   	| NOUN.FS.IG 	| <bdi>  اسم.نكرة.هي.مجرور </bdi> 	|
    |    مَلِكَةً   	| NOUN.FS.IA 	| <bdi>  اسم.نكرة.هي.منصوب </bdi> 	|
    |    مَلِكَةُ   	| NOUN.FS.DN 	| <bdi> اسم.معرفة.هي.مرفوع </bdi> 	|
    |    مَلِكَةُ   	| NOUN.FS.CN 	| <bdi>  اسم.مضاف.هي.مرفوع </bdi> 	|
    |    مَلِكَةِ   	| NOUN.FS.CG 	| <bdi>  اسم.مضاف.هي.مجرور </bdi> 	|
    |    مَلِكَةَ   	| NOUN.FS.CA 	| <bdi>  اسم.مضاف.هي.منصوب </bdi> 	|
    |   مَلِكانِ   	| NOUN.MD.IN 	| <bdi> اسم.نكرة.هما♂.مرفوع</bdi> 	|
    |   مَلِكَيْنِ   	| NOUN.MD.IG 	| <bdi> اسم.نكرة.هما♂.مجرور</bdi> 	|
    |   مَلِكَيْنِ   	| NOUN.MD.IA 	| <bdi> اسم.نكرة.هما♂.منصوب</bdi> 	|
    |   مَلِكانِ   	| NOUN.MD.DN 	| <bdi>اسم.معرفة.هما♂.مرفوع</bdi> 	|
    |    مَلِكا   	| NOUN.MD.CN 	| <bdi> اسم.مضاف.هما♂.مرفوع</bdi> 	|
    |    مَلِكَيْ   	| NOUN.MD.CG 	| <bdi> اسم.مضاف.هما♂.مجرور</bdi> 	|
    |    مَلِكَيْ   	| NOUN.MD.CA 	| <bdi> اسم.مضاف.هما♂.منصوب</bdi> 	|
    |   مَلِكَتانِ  	| NOUN.FD.IN 	| <bdi> اسم.نكرة.هما♀.مرفوع</bdi> 	|
    |   مَلِكَتَيْنِ  	| NOUN.FD.IG 	| <bdi> اسم.نكرة.هما♀.مجرور</bdi> 	|
    |   مَلِكَتَيْنِ  	| NOUN.FD.IA 	| <bdi> اسم.نكرة.هما♀.منصوب</bdi> 	|
    |   مَلِكَتانِ  	| NOUN.FD.DN 	| <bdi>اسم.معرفة.هما♀.مرفوع</bdi> 	|
    |   مَلِكَتا   	| NOUN.FD.CN 	| <bdi> اسم.مضاف.هما♀.مرفوع</bdi> 	|
    |   مَلِكَتَيْ   	| NOUN.FD.CG 	| <bdi> اسم.مضاف.هما♀.مجرور</bdi> 	|
    |   مَلِكَتَيْ   	| NOUN.FD.CA 	| <bdi> اسم.مضاف.هما♀.منصوب</bdi> 	|
    |    مُلُوك   	| NOUN.MP.IU 	| <bdi>    اسم.نكرة.هم♂    </bdi> 	|
    |    مُلُوكٌ   	| NOUN.MP.IN 	| <bdi> اسم.نكرة.هم♂.مرفوع </bdi> 	|
    |    مُلُوكٍ   	| NOUN.MP.IG 	| <bdi> اسم.نكرة.هم♂.مجرور </bdi> 	|
    |   مُلُوكاً   	| NOUN.MP.IA 	| <bdi> اسم.نكرة.هم♂.منصوب </bdi> 	|
    |    مُلُوكُ   	| NOUN.MP.DN 	| <bdi> اسم.معرفة.هم♂.مرفوع</bdi> 	|
    |    مُلُوكُ   	| NOUN.MP.CN 	| <bdi> اسم.مضاف.هم♂.مرفوع </bdi> 	|
    |    مُلُوكِ   	| NOUN.MP.CG 	| <bdi> اسم.مضاف.هم♂.مجرور </bdi> 	|
    |    مُلُوكَ   	| NOUN.MP.CA 	| <bdi> اسم.مضاف.هم♂.منصوب </bdi> 	|
    |   أَمْلاك   	| NOUN.MP.IU 	| <bdi>    اسم.نكرة.هم♂    </bdi> 	|
    |   أَمْلاكٌ   	| NOUN.MP.IN 	| <bdi> اسم.نكرة.هم♂.مرفوع </bdi> 	|
    |   أَمْلاكٍ   	| NOUN.MP.IG 	| <bdi> اسم.نكرة.هم♂.مجرور </bdi> 	|
    |   أَمْلاكاً  	| NOUN.MP.IA 	| <bdi> اسم.نكرة.هم♂.منصوب </bdi> 	|
    |   أَمْلاكُ   	| NOUN.MP.DN 	| <bdi> اسم.معرفة.هم♂.مرفوع</bdi> 	|
    |   أَمْلاكُ   	| NOUN.MP.CN 	| <bdi> اسم.مضاف.هم♂.مرفوع </bdi> 	|
    |   أَمْلاكِ   	| NOUN.MP.CG 	| <bdi> اسم.مضاف.هم♂.مجرور </bdi> 	|
    |   أَمْلاكَ   	| NOUN.MP.CA 	| <bdi> اسم.مضاف.هم♂.منصوب </bdi> 	|
    |   مَلِكات   	| NOUN.FP.IU 	| <bdi>     اسم.نكرة.هن    </bdi> 	|
    |   مَلِكاتٌ   	| NOUN.FP.IN 	| <bdi>  اسم.نكرة.هن.مرفوع </bdi> 	|
    |   مَلِكاتٍ   	| NOUN.FP.IG 	| <bdi>  اسم.نكرة.هن.مجرور </bdi> 	|
    |   مَلِكاتٍ   	| NOUN.FP.IA 	| <bdi>  اسم.نكرة.هن.منصوب </bdi> 	|
    |   مَلِكاتُ   	| NOUN.FP.DN 	| <bdi> اسم.معرفة.هن.مرفوع </bdi> 	|
    |   مَلِكاتُ   	| NOUN.FP.CN 	| <bdi>  اسم.مضاف.هن.مرفوع </bdi> 	|
    |   مَلِكاتِ   	| NOUN.FP.CG 	| <bdi>  اسم.مضاف.هن.مجرور </bdi> 	|
    |   مَلِكاتِ   	| NOUN.FP.CA 	| <bdi>  اسم.مضاف.هن.منصوب </bdi> 	|


??? optional-class "GLF: <bdi>شَيخ</bdi> _'Sheikh;chieftain'_"


    | Word Form 	|   Tag   	|  العلامة 	|
    |:---------:	|:-------:	|:--------:	|
    | شَيخ       	| NOUN.MS 	| <bdi>اسم.هو  </bdi> 	|
    | شَيخَة      	| NOUN.FS 	| <bdi>اسم.هي  </bdi> 	|
    | شَيخَين     	| NOUN.MD 	| <bdi>اسم.هما♂</bdi> 	|
    | شَيختَين    	| NOUN.FD 	| <bdi>اسم.هما♀</bdi> 	|
    | شْيُوخ      	| NOUN.MP 	| <bdi>اسم.هم♂ </bdi> 	|
    | شَيخَات     	| NOUN.FP 	| <bdi>اسم.هن  </bdi> 	|



??? optional-class "EGY: <bdi>أُستَاذ</bdi> _'professor;teacher'_"


    | Word Form 	|   Tag   	|  العلامة           	|
    |:---------:	|:-------:	|:-----------------:	|
    | أُستَاذ     	| NOUN.MS 	| <bdi>اسم.هو  </bdi> 	|
    | أُستَاذَة    	| NOUN.FS 	| <bdi>اسم.هي  </bdi> 	|
    | أُستَاذَين   	| NOUN.MD 	| <bdi>اسم.هما♂</bdi> 	|
    | أُستَاذتَين  	| NOUN.FD 	| <bdi>اسم.هما♀</bdi> 	|
    | أَساتذَة     	| NOUN.MP 	| <bdi>اسم.هم♂ </bdi> 	|
    | أُستَاذَات   	| NOUN.FP 	| <bdi>اسم.هن  </bdi> 	|


<br>
**Lemmas with partial paradigms**


??? optional-class "MSA: <bdi>حُبّ</bdi> _'affection;love'_ "

    | Word Form 	|     Tag    	|       العلامة      	|
    |:---------:	|:----------:	|:------------------:	|
    |     حُبّ    	| NOUN.MS.IU 	| <bdi>    اسم.نكرة.هو   </bdi> 	|
    |     حُبٌّ    	| NOUN.MS.IN 	| <bdi> اسم.نكرة.هو.مرفوع</bdi> 	|
    |     حُبٍّ    	| NOUN.MS.IG 	| <bdi> اسم.نكرة.هو.مجرور</bdi> 	|
    |    حُبّاً    	| NOUN.MS.IA 	| <bdi> اسم.نكرة.هو.منصوب</bdi> 	|
    |     حُبُّ    	| NOUN.MS.DN 	| <bdi>اسم.معرفة.هو.مرفوع</bdi> 	|
    |     حُبُّ    	| NOUN.MS.CN 	| <bdi> اسم.مضاف.هو.مرفوع</bdi> 	|
    |     حُبِّ    	| NOUN.MS.CG 	| <bdi> اسم.مضاف.هو.مجرور</bdi> 	|
    |     حُبَّ    	| NOUN.MS.CA 	| <bdi> اسم.مضاف.هو.منصوب</bdi> 	|


??? optional-class "GLF: <bdi>سَيَّارَة</bdi> _'car'_"

    | Word Form 	|   Tag   	|  العلامة 	|
    |:---------:	|:-------:	|:--------:	|
    |   سَيَّارَة   	| NOUN.FS 	| <bdi> اسم.هي </bdi> 	|
    |  سَيَّارتَين  	| NOUN.FD 	| <bdi>اسم.هما♀</bdi> 	|
    |   سَيَّارَات  	| NOUN.FP 	| <bdi> اسم.هن </bdi> 	|
    |   سْيَايِير  	| NOUN.FP 	| <bdi> اسم.هن </bdi> 	|


??? optional-class "EGY: <bdi>وِشّ</bdi> _'face'_"

    | Word Form 	|   Tag   	|  العلامة 	|
    |:---------:	|:-------:	|:--------:	|
    |     وِشّ    	| NOUN.MS 	| <bdi> اسم.هو </bdi> 	|
    |    وِشَّين   	| NOUN.MD 	| <bdi>اسم.هما♂</bdi> 	|
    |    وُشُوش   	| NOUN.MP 	| <bdi> اسم.هم♂</bdi> 	|

<br>
**Examples of various words the are common in different Arabic varieties**

??? optional-class "Click here to view the examples"

    | Word Form 	|   Tag   	| العلامة 	|    English Gloss    	| Dialect 	|
    |-----------	|:-------:	|:-------:	|:-------------------:	|:-------:	|
    | حرمات     	| NOUN.FP 	| اسم.هن  	| women               	| GLF     	|
    | حريم      	| NOUN.FP 	| اسم.هن  	| women               	| GLF     	|
    | نسوان     	| NOUN.FP 	| اسم.هن  	| women               	| GLF,EGY 	|
    | خالوه     	| NOUN.FS 	| اسم.هي  	| aunt! (maternal)    	| GLF     	|
    | عموه      	| NOUN.FS 	| اسم.هي  	| aunt! (paternal)    	| GLF     	|
    | حجرة      	| NOUN.FS 	| اسم.هي  	| room                	| GLF     	|
    | ميز       	| NOUN.FS 	| اسم.هي  	| table               	| GLF     	|
    | بكرة      	| NOUN.FS 	| اسم.هي  	| tomorrow            	| GLF,EGY 	|
    | شيشة      	| NOUN.FS 	| اسم.هي  	| waterpipe           	| GLF,EGY 	|
    | حرمة      	| NOUN.FS 	| اسم.هي  	| woman               	| GLF     	|
    | مرة       	| NOUN.FS 	| اسم.هي  	| woman               	| GLF     	|
    | بزران     	| NOUN.MP 	| اسم.هم  	| child               	| GLF     	|
    | عيال      	| NOUN.MP 	| اسم.هم  	| child               	| GLF,EGY 	|
    | رجّال      	| NOUN.MP 	| اسم.هم  	| men                 	| GLF     	|
    | رجاجيل    	| NOUN.MP 	| اسم.هم  	| men                 	| GLF     	|
    | حق        	| NOUN.MS 	| اسم.هو  	| for the benefit of  	| GLF     	|
    | خلاص      	| NOUN.MS 	| اسم.هو  	| enough              	| GLF     	|
    | سكين      	| NOUN.MS 	| اسم.هو  	| knife               	| GLF     	|
    | سكين      	| NOUN.MS 	| اسم.هي  	| knife               	| GLF     	|
    | مكتوب     	| NOUN.MS 	| اسم.هو  	| letter              	| GLF,EGY 	|
    | مثل       	| NOUN.MS 	| اسم.هو  	| like                	| GLF     	|
    | حلق       	| NOUN.MS 	| اسم.هو  	| mouth               	| GLF     	|
    | خشم       	| NOUN.MS 	| اسم.هو  	| nose                	| GLF     	|
    | مال       	| NOUN.MS 	| اسم.هو  	| of                  	| GLF     	|
    | حقّ        	| NOUN.MS 	| اسم.هو  	| of, belongs to      	| GLF     	|
    | برع       	| NOUN.MS 	| اسم.هو  	| outside, outside of 	| GLF     	|
    | حد        	| NOUN.MS 	| اسم.هو  	| somebody, someone   	| GLF,EGY 	|
    | باكر      	| NOUN.MS 	| اسم.هو  	| tomorrow            	| GLF     	|
    | امس       	| NOUN.MS 	| اسم.هو  	| yesterday           	| GLF     	|
    | كذي       	| NOUN.MS 	| اسم.هو  	| like this, as this  	| GLF     	|

<br>

#### NOUN_PROP - <span dir="rtl">اسم_علم</span>

**Proper Nouns**
: Proper nouns are nouns that have a unique referential meaning in context that is mutually exclusive with other entities.

**Notes**:

- Proper nouns refer to names of people, geographical entities, months, and acronyms.
- Proper nouns with more than one part such as <span dir="rtl">محمد علي</span> should have both words annotated as proper nouns.
- Names such as <span dir="rtl">عبد الله</span> and <span dir="rtl">علاء الدين</span> should be split, both words annotated as proper nouns.
- Titles of newspapers, magazines, and news agencies, sports teams are annotated as proper nouns, as well as names of political parties, etc.
- Proper nouns might exhibit a different kind of ambiguity where the word as a `NOUN` has features that faill the morpho-syntactic agreement when used as a proper noun. For example the proper noun <span dir="rtl">احلام</span> as a female given name behaves as a `FS` hence will be given `NOUN_PROP.FS` as a tag. The same applies to other proper nouns such as the newspaper name <span dir="rtl">الاهرام</span>, see examples below.
- Proper nouns can be confused with common nouns. A case in point is the word <span dir="rtl">جَنُوب إِفرِيقيا</span>, the two parts of the word are considered as proper nouns when it refers to the country, South Africa.
- The lemma of a proper noun does not include Al but it includes the 'Ta Marbuta'. The proper noun <span dir="rtl">القاهرة</span> has the lemma <span dir="rtl">قاهرة</span>.
- Just linke nouns can inflect for subset of morphological features, usually the number in certain cases.

**Examples**

Below are examples of different proper nouns and their respective tags. Those examples are valid in most Arabic varieties. Note that in MSA, the tag will include the state and case feature depending on the context surrounding the word.

| Word<br>Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English<br>Gloss       	| Comments<br>Examples                    	|
|--------------	|--------------	|--------------------	|------------------------	|-----------------------------------------	|
| خليفة        	| NOUN_PROP.MS 	| اسم علم.هو         	| Khalifa                	| name of a person                        	|
| هند          	| NOUN_PROP.FS 	| اسم علم.هي         	| Hind                   	| name of a person                        	|
| عبد الله     	| NOUN_PROP.MS 	| اسم علم.هو         	| Abdullah               	| each word gets the same POS tag         	|
| امريكا       	| NOUN_PROP.FS 	| اسم علم.هي         	| America                	| geographical entity                     	|
| ناتو         	| NOUN_PROP.MS 	| اسم علم.هو         	| NATO                   	| acronym                                 	|
| امشير        	| NOUN_PROP.MS 	| اسم علم.هو         	| Meshir                 	| month (coptic calendar)                 	|
| الاهرام      	| NOUN_PROP.FS 	| اسم علم.هي         	| Al Ahram               	| newspaper  نشرت الاهرام التقرير النهائي 	|
| الاهرام      	| NOUN_PROP.MS 	| اسم علم.هو         	| Al Ahram               	| newspaper  تلقى الاهرام اتصالا هاتفيا   	|
| الاخوان      	| NOUN_PROP.FS 	| اسم علم.هي         	| The Muslim Brotherhood 	| political party  تلقت الإخوان تمويلاً    	|



#### NOUN_QUANT - <span dir="rtl">اسم_كم</span>

Noun quantifiers
: Noun quantifiers express either quantity or approximation.

**Examples**

Below are examples of common noun quantifiers from different Arabic varieties. Note that they can inflect to other morphological features in the same as nouns.


??? optional-class  "**MSA** examples" 

    The examples below are in their indifenite nominative form.

    | Word Form 	|        POS.Features       	|         قسم الكلام.الخصائص        	|                         English Gloss                         	|
    |:---------:	|:----------------:	|:---------------------:	|:-------------------------------------------------------------:	|
    |    عُشُرٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                          (one)_tenth                          	|
    |    تُسُعٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                          (one)_ninth                          	|
    |    ثُمُنٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                          (one)_eighth                         	|
    |    سُبُعٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                         (one)_seventh                         	|
    |    سُدُسٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                          (one)_sixth                          	|
    |    خُمُسٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                          (one)_fifth                          	|
    |    رُبُعٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                      quarter,(one)_fourth                     	|
    |    ثُلُثٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                          (one)_third                          	|
    |    نِصْفٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                              half                             	|
    |    شَطْرٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                 part,portion,division,section                 	|
    |    بِضْعَةٌ   	| NOUN_QUANT.FS.IN 	| <bdi>نكرة.هي.مرفوع</bdi> 	|                       some,a_few,several                      	|
    |    بِضْعٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                       some,a_few,several                      	|
    |    بَعْضٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                     some,a_few,little,part                    	|
    |    مُعْظَمٌ   	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                         most,majority                         	|
    |    أَغْلَبُ   	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|  most_(of),the_majority_(of),the_greater_portion_of_part_(of) 	|
    |   غالِبِيَّةٌ  	| NOUN_QUANT.FS.IN 	| <bdi>نكرة.هي.مرفوع</bdi> 	|                majority,greater_part_of_portion               	|
    |     جُلٌّ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|          most_(of),the_majority_(of),bulk,major_part          	|
    |   حَوالَي   	| NOUN_QUANT.MS.IU 	| <bdi>   نكرة.هو   </bdi> 	|        about,approximately,around,roughly,nearly,almost       	|
    |     زُهاءَ   	| NOUN_QUANT.MS.IU 	| <bdi>   نكرة.هو   </bdi> 	|        about,approximately,around,roughly,nearly,almost       	|
    |   قُرابَةٌ   	| NOUN_QUANT.FS.IN 	| <bdi>نكرة.هي.مرفوع</bdi> 	|         approximately,almost,just,about,nearly,roughly        	|
    |    قَيْدٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                             around                            	|
    |    قَيْسٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                     measure,gauge,quantify                    	|
    |    أَكْثَرُ   	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                       more,most,majority                      	|
    |    جَمِيعٌ   	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                     all,entire,every,whole                    	|
    |     كُلٌّ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                     all,entire,every,whole                    	|
    |    كامِلٌ   	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                             entire                            	|
    |    كافَّةٌ   	| NOUN_QUANT.FS.IN 	| <bdi>نكرة.هي.مرفوع</bdi> 	|                              all                              	|
    |    ضِعْفٌ    	| NOUN_QUANT.MS.IN 	| <bdi>نكرة.هو.مرفوع</bdi> 	|                        double;multiple                        	|
    |    كِلا    	| NOUN_QUANT.MD.IU 	| <bdi>  نكرة.هما♂  </bdi> 	|                            both_of                            	|
    |    كِلْتا   	| NOUN_QUANT.FD.IU 	| <bdi>  نكرة.هما♀  </bdi> 	|                            both_of                            	|


??? optional-class  "**GLF** examples" 
    The examples in their lemma form. These examples are extracted form [The Annotated Gumar Corpus](https://camel.abudhabi.nyu.edu/annotated-gumar-corpus/).

    | Word Form 	|  POS.Features 	| قسم الكلام.الخصائص 	|      English Gloss     	|
    |:---------:	|:-------------:	|:------------------:	|:----------------------:	|
    |   </bdi> شُوَيّ</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|    few;a_little_bit    	|
    |   </bdi>  اَيّ</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|           any          	|
    |   </bdi> حَبَّة</bdi>    	| NOUN_QUANT.FS 	|      <bdi>اسم_كم.هي</bdi>     	|          some          	|
    |   </bdi> بَعض</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|        some;part       	|
    |   </bdi>  كَم</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|      some;severam      	|
    |   </bdi> كِذا</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|          many          	|
    |   </bdi>  كِلّ</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	| all;whole;entire;every 	|
    |   </bdi> نِصف</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|          half          	|
    |   </bdi>  نُصّ</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|          half          	|
    |   </bdi> رُبع</bdi>    	| NOUN_QUANT.MS 	|      <bdi>اسم_كم.هو</bdi>     	|         quarter        	|

<br>

_Examples for other dialecs will be added soon_

#### NOUN_NUM - <span dir="rtl">اسم_عدد</span>

**Cardinal numbers**
: Cardinal numbers quantify rather than rank. They answer the question “How many?”

**Notes**:

- Compound numerals (from 21 to infinite) that are coordinated with the conjunction wa- follow the POS tag of the first element. If the first element is a cardinal number, the second element should be annotated as such.
- Cardinal numbers can occur in pre-nominal and post-nominal positions without any agreement with the noun they occur with. They are invariable.
- MSA has different agreement rules from the dialects.
<!--TODO discuss the MSA inverse agreement-->

**Examples**

Below are the full list of the basic numbers in units, tens, and hundreds.

??? optional-class  "**GLF** examples"

    | Word Form             	| POS.Features 	| قسم_الكلام.الخصائص             	| English Gloss      	|
    |-----------------------	|--------------	|-------------------------------	|--------------------	|
    | <bdi>صفر    </bdi>        | NOUN_NUM.MS  	| <bdi>اسم_عدد.هو  </bdi>       		| 0, zero            	|
    | <bdi>واحد   </bdi>        | NOUN_NUM.MS  	| <bdi>اسم_عدد.هو  </bdi>       		| 1, one             	|
    | <bdi>عشر    </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 10, ten            	|
    | <bdi>عشرة   </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 10, ten            	|
    | <bdi>امية   </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 100, one hundred   	|
    | <bdi>مية    </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 100, one hundred   	|
    | <bdi>الف    </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 1000, one thousand 	|
    | <bdi>آلاف   </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 1000, thousands    	|
    | <bdi>احدعش  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 11, eleven         	|
    | <bdi>اثنعش  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 12, twelve         	|
    | <bdi>ثلتعش  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 13, thirteen       	|
    | <bdi>اربعتعش</bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 14, fourteen       	|
    | <bdi>خمستعش </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 15, fifteen        	|
    | <bdi>ستعش   </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 16, sixteen        	|
    | <bdi>سبعتعش </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 17, seventeen      	|
    | <bdi>ثمنتعش </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 18, eighteen       	|
    | <bdi>تسعتعش </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 19, nineteen       	|
    | <bdi>اثنين  </bdi>        | NOUN_NUM.MD  	| <bdi>اسم_عدد.هما♂</bdi>       		| 2, two             	|
    | <bdi>عشرين  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 20, twenty         	|
    | <bdi>ميتين  </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 200, two hundred   	|
    | <bdi>ثلاث   </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 3, three           	|
    | <bdi>ثلاثة  </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 3, three           	|
    | <bdi>ثلاثين </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 30, thirty         	|
    | <bdi>ثلاثمية</bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 300, three hundred 	|
    | <bdi>اربع   </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 4, four            	|
    | <bdi>اربعة  </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 4, four            	|
    | <bdi>اربعين </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 40, fourty         	|
    | <bdi>اربعمية</bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 400, four hundred  	|
    | <bdi>خمس    </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 5, five            	|
    | <bdi>خمسة   </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 5, five            	|
    | <bdi>خمسين  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 50, fifty          	|
    | <bdi>خمسمية </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 500, five hundred  	|
    | <bdi>ست     </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 6, six             	|
    | <bdi>ستة    </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 6, six             	|
    | <bdi>ستين   </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 60, sixty          	|
    | <bdi>ستمية  </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 600, six hundred   	|
    | <bdi>سبع    </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 7, seven           	|
    | <bdi>سبعة   </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 7, seven           	|
    | <bdi>سبعين  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 70, seventy        	|
    | <bdi>سبعمية </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 700, seven hundred 	|
    | <bdi>ثمان   </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 8, eight           	|
    | <bdi>ثمانية </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 8, eight           	|
    | <bdi>ثمانين </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 80, eighty         	|
    | <bdi>ثمانمية</bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 800, eight hundred 	|
    | <bdi>تسع    </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 9, nine            	|
    | <bdi>تسعة   </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 9, nine            	|
    | <bdi>تسعين  </bdi>        | NOUN_NUM.MP  	| <bdi>اسم_عدد.هم  </bdi>       		| 90, ninety         	|
    | <bdi>تسعمية </bdi>        | NOUN_NUM.FP  	| <bdi>اسم_عدد.هن  </bdi>       		| 900, nine hundred  	|
</br>

_Examples for **MSA** and other dialecs will be added soon_

#### PRON - <span dir="rtl">ضمير</span>

**Bound pronouns** - <span dir="rtl">**الضمائر المتصلة**</span>
: Bound pronouns are morphemes that cannot occur independently of another morpheme. They are related to other words called their hosts.

**Notes**:

- These pronouns bind to verbs to mark a direct object, to nouns to mark possession, and to prepositions.

**Examples**

Below is a list of the bound pronouns in different Arabic varieties. Note that there are difference in pronounciatation between the different varieties, however, orthographically they are spelled the same way without diacritics.

| Word From         	| POS.Features 	| قسم الكلام.الخصائص        	| English Gloss     	|    Diaclect   	|
|:---------------------:	|:-------------:	|:-------------------------:	|:-------------------:	|:-----------------:	|
| <bdi>+نا</bdi>      	| PRON.1P      	| <bdi>ضمير.نحن</bdi>       	| our, us           	| MSA,GLF,EGY  	|
| <bdi>+ني</bdi>      	| PRON.1S      	| <bdi>ضمير.انا</bdi>       	| me                	| MSA,GLF,EGY  	|
| <bdi>+ي</bdi>      	| PRON.1S      	| <bdi>ضمير.انا</bdi>       	| me, my            	| MSA,GLF,EGY  	|
| <bdi>+كن</bdi>      	| PRON.2FP     	| <bdi>ضمير.انتن</bdi>      	| you, your         	| MSA,GLF         	|
| <bdi>+ج</bdi>      	| PRON.2FS     	| <bdi>ضمير.انت♀</bdi>      	| you, your         	| GLF            	|
| <bdi>+ك</bdi>      	| PRON.2FS     	| <bdi>ضمير.انت♀</bdi>      	| you, your         	| MSA, EGY         	|
| <bdi>+كم</bdi>      	| PRON.2MP     	| <bdi>ضمير.انتم</bdi>      	| you, your         	| MSA,GLF         	|
| <bdi>+كم</bdi>      	| PRON.2P     	| <bdi>ضمير.انتم⚥</bdi>    	| you, your         	| GLF,EGY            	|
| <bdi>+ك</bdi>      	| PRON.2MS     	| <bdi>ضمير.انت♂</bdi>      	| you, your         	| MSA,GLF,EGY    	|
| <bdi>+هن</bdi>      	| PRON.3FP     	| <bdi>ضمير.هن</bdi>        	| their, them       	| MSA,GLF      	|
| <bdi>+ها</bdi>      	| PRON.3FS     	| <bdi>ضمير.هي</bdi>        	| her, it, its      	| MSA,GLF,EGY    	|
| <bdi>+هم</bdi>      	| PRON.3MP     	| <bdi>ضمير.هم♂</bdi>       	| their, them       	| MSA,GLF      	|
| <bdi>+هم</bdi>      	| PRON.3P     	| <bdi>ضمير.هم⚥</bdi>      	| their, them       	| GLF,EGY            	|
| <bdi>+ه</bdi>      	| PRON.3MS     	| <bdi>ضمير.هو</bdi>        	| him, his, it, its 	| MSA,GLF,EGY    	|



* * *

**Unbound pronouns** - <span dir="rtl">**الضمائر المنفصلة**</span>
: Unbound pronouns are free morphemes that occur as separate words.

**Examples**

Below is a list of the bound pronouns in different Arabic varieties. Note that there are difference in pronounciatation between the different varieties, however, orthographically they are spelled the same way without diacritics.

| Word Form       	| POS.Features 	| قسم الكلام.الخصائص        | English Gloss 	| Diaclect      	|
|-----------------:	|--------------	|-------------------------:	|--------------	|----------------	|
| <bdi>احن</bdi>    	| PRON.1P      	| <bdi>ضمير.نحن</bdi>    	| we          	| GLF            	|
| <bdi>احنا</bdi>   	| PRON.1P      	| <bdi>ضمير.نحن</bdi>    	| we          	| GLF, GLF         	|
| <bdi>حنّا</bdi>    	| PRON.1P      	| <bdi>ضمير.نحن</bdi>    	| we          	| GLF            	|
| <bdi>نحن</bdi>    	| PRON.1P      	| <bdi>ضمير.نحن</bdi>    	| we          	| MSA,GLF       	|
| <bdi>انا</bdi>    	| PRON.1S      	| <bdi>ضمير.انا</bdi>    	| I           	| MSA,GLF,EGY 	|
| <bdi>انتي</bdi>   	| PRON.2FS     	| <bdi>ضمير.انت♀</bdi>   	| you         	| EGY, GLF         	|
| <bdi>انت</bdi>    	| PRON.2MS     	| <bdi>ضمير.انت♂</bdi>   	| you         	| MSA,GLF,EGY    	|
| <bdi>انتو</bdi>   	| PRON.2P      	| <bdi>ضمير.انتم⚥</bdi>   	| you         	| GLF,EGY         	|
| <bdi>هي</bdi>     	| PRON.3FS     	| <bdi>ضمير.هي</bdi>     	| she is      	| MSA,GLF,EGY    	|
| <bdi>هو</bdi>     	| PRON.3MS     	| <bdi>ضمير.هو</bdi>     	| he, it      	| MSA,GLF,EGY    	|
| <bdi>هم</bdi>     	| PRON.3P      	| <bdi>ضمير.هم⚥</bdi>   	| they        	| GLF,EGY        	|




#### PRON_DEM - <span dir="rtl">ضمير_إشارة</span>


**Demonstrative pronouns**
: Demonstrative pronouns are pronouns used for proximal or distal references.

**Notes**:

- Demonstrative Pronouns can be basewords and/or proclitics, some baseword pronouns take no features, see examples below.
- The relationship between proximity and distance does not seem to exist in Egyptian Arabic.

**Examples**

Below is a list of the demonstrative pronouns in different Arabic varieties. Note that there are difference in pronounciatation between the different varieties, however, orthographically they are spelled the same way without diacritics.

| Word Form   	| POS.Features 	| قسم الكلام.الخصائص           	| English Gloss 	| Dialect<br>Examples 	|
|-----------------:	|--------------	|-----------------------------:	|---------------	|---------------------	|
| <bdi>ا+  </bdi>   | PRON_DEM     	| <bdi>ضمير_إشارة    </bdi>    	|   that;this   	| EGY<br>أهو           	|
| <bdi>ه+  </bdi>   | PRON_DEM     	| <bdi>ضمير_إشارة    </bdi>    	|   that;this   	| GLF<br>هالبيت       	|
| <bdi>ذا</bdi>     | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this    	| MSA,GLF           	|
| <bdi>ذاك</bdi>    | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this    	| GLF               	|
| <bdi>ذيك</bdi>    | PRON_DEM.FS 	| <bdi>ضمير_إشارة.هي </bdi>     |   that;this    	| GLF               	|
| <bdi>ها</bdi>     | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this    	| MSA,GLF             	|
| <bdi>هاذي</bdi>   | PRON_DEM.FS 	| <bdi>ضمير_إشارة.هي </bdi>     |   that;this    	| GLF               	|
| <bdi>هاذن</bdi>   | PRON_DEM.FP 	| <bdi>ضمير_إشارة.هن </bdi>     |   these;those  	| GLF               	|
| <bdi>هاك</bdi>    | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this    	| GLF               	|
| <bdi>هاكي</bdi>   | PRON_DEM.FS 	| <bdi>ضمير_إشارة.هي </bdi>     |   that;this    	| GLF               	|
| <bdi>هاي</bdi>    | PRON_DEM.FS 	| <bdi>ضمير_إشارة.هي </bdi>     |   that;this     	| GLF               	|
| <bdi>هاييل</bdi>  | PRON_DEM.UP 	| <bdi>ضمير_إشارة.هم⚥ </bdi>    |   these;those  	| GLF               	|
| <bdi>هذا</bdi>    | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this     	| MSA,GLF           	|
| <bdi>هذاك</bdi>   | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this     	| GLF               	|
| <bdi>هذايك</bdi>  | PRON_DEM.FS 	| <bdi>ضمير_إشارة.هي </bdi>     |   that;this     	| GLF               	|
| <bdi>هذوه</bdi>   | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this     	| GLF               	|
| <bdi>ده</bdi>     | PRON_DEM.MS 	| <bdi>ضمير_إشارة.هو </bdi>     |   that;this     	| ُEGY                 	|
| <bdi>دي</bdi>     | PRON_DEM.FS 	| <bdi>ضمير_إشارة.هي </bdi>     |   that;this     	| EGY               	|
| <bdi>دول</bdi>    | PRON_DEM.UP 	| <bdi>ضمير_إشارة.هم⚥ </bdi>    |   that;this     	| EGY               	|



#### PRON_INTERROG - <span dir="rtl">ضمير_استفهام</span>

**Interrogative Pronouns**
: Interrogative Pronouns are independent words that used to form direct questions.

**Notes**:

- Interrogative pronouns don't take features.

**Examples**

Below is a list of the interrogative pronouns in different Arabic varieties. Note that there are difference in pronounciatation between the different varieties, however, orthographically they are spelled the same way without diacritics.

| Word Form   	| POS.Features 	| قسم الكلام.الخصائص        	| English Gloss 	| Dialect 	|
|-----------------:	|--------------	|-------------------------:	|---------------	|---------------------	|
| <bdi>شو</bdi>  	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| what            	| GLF, LEV                	|
| <bdi>ايش</bdi>	   	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| what            	| GLF                	|
| <bdi>ايه</bdi> 	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| what            	| EGY                	|
| <bdi>اي</bdi>  	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| which;who       	| MSA,GLF,EGY        	|
| <bdi>كم</bdi>  	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| how_much;how_many	| MSA,GLF,EGY        	|
| <bdi>كمن</bdi> 	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| how_much;how_many	| GLF                	|
| <bdi>كيف</bdi> 	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| how            	| MSA,GLF,EGY        	|
| <bdi>ما</bdi>  	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| which;what     	| MSA                	|
| <bdi>ماذا</bdi> 	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| which;what     	| MSA                	|
| <bdi>من</bdi>  	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| whom;who       	| MSA,GLF             	|
| <bdi>منو</bdi> 	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| whom;who       	| GLF                	|
| <bdi>مين</bdi> 	|PRON_INTERROG 	|<bdi>ضمير_استفهام</bdi>  	| whom;who       	| GLF,EGY            	|




#### PRON_REL - <span dir="rtl">ضمير_موصول</span>


**Relative pronouns**
: Relative pronouns introduce relative clauses.

**Notes**:

- Most dialectal relative pronouns don't take any features.
- MSA relative pronouns can take gender and number features. 

**Examples**

Below is a list of the interrogative pronouns in different Arabic varieties. Note that there are difference in pronounciatation between the different varieties, however, orthographically they are spelled the same way without diacritics.

| Word Form    	| POS.Features 	| قسم الكلام.الخصائص        	| English Gloss     	| Dialect           	|
|-------------------:	|--------------	|-------------------------:	|-------------------	|---------------------	|
| <bdi>الذي</bdi>    	|PRON_REL.MS  	| <bdi>ضمير_موصول.هو </bdi>	|which;that;whom;who  	|MSA                	|
| <bdi>اللتي</bdi>   	|PRON_REL.FS  	| <bdi>ضمير_موصول.هي </bdi>	|which;that;whom;who  	|MSA                	|
| <bdi>الذين</bdi>   	|PRON_REL.MP  	| <bdi>ضمير_موصول.هم </bdi>	|which;that;whom;who  	|MSA                	|
| <bdi>اللواتي</bdi> 	|PRON_REL.FP  	| <bdi>ضمير_موصول.هن </bdi>	|which;that;whom;who  	|MSA                	|
| <bdi>اللي</bdi>    	|PRON_REL     	| <bdi>ضمير_موصول</bdi>  	|which;that;who     	|GLF,EGY, LEV      	|
| <bdi>ما</bdi>      	|PRON_REL     	| <bdi>ضمير_موصول</bdi>  	|which;that;what    	|MSA,GLF,EGY, LEV 	|
| <bdi>من</bdi>      	|PRON_REL     	| <bdi>ضمير_موصول</bdi>  	|whom;who           	|MSA,GLF           	|




#### PRON_EXCLAM - <span dir="rtl">ضمير_تعجب</span>

**Exclamative Pronouns**
: Exclamative Pronouns introduces exclamative structures.

**Notes**:

- Exclamative Pronouns don't take any features.

**Examples**

Below is a list of the exclamative pronouns in different Arabic varieties. Note that there are difference in pronounciatation between the different varieties, however, orthographically they are spelled the same way without diacritics.

| Word Form    	| POS.Features 	| قسم الكلام.الخصائص        	| English Gloss    	| Dialect           	|
|-------------------:	|--------------	|-------------------------:	|-----------------	|---------------------	|
| <bdi>ما</bdi>      	|PRON_EXCLAM	| <bdi>ضمير_تعجب</bdi>   	| how;what      	| MSA,GLF,EGY      	|
| <bdi>وش</bdi>      	|PRON_EXCLAM	| <bdi>ضمير_تعجب</bdi>   	| how;what      	| GLF                	|
| <bdi>ايه</bdi>      	|PRON_EXCLAM	| <bdi>ضمير_تعجب</bdi>   	| how;what      	| EGY                	|




#### ADJ - <span dir="rtl">صفة</span>

**Adjectives**
: Adjectives are nominals that describe or clarify a noun

**Notes**:

- Adjectives must inflect for gender and number according to the agreement rule with nouns.
- The agreement rule states that adjectives must agree with the noun that they modify in gender and number. EXCEPT for plural irrational (<span dir="rtl">غير عاقل</span>) nouns, which always take feminine singular adjectives.
For example of agreement: the word <span dir="rtl">مهم</span> inflects in agreement with the noun in the case of <span dir="rtl">امرأة مهمة</span> and <span dir="rtl">نساء مهمات</span>. It also agrees in the case of <span dir="rtl">كتاب مهم</span> but not <span dir="rtl">كتب مهمة</span>. Because the word <span dir="rtl">كتاب</span> is an irrational noun, hence the plural <span dir="rtl">كتب</span> takes a singular feminine adjective.
- In the case where there is no noun in the sentence, the word will be tagged as an adjective if a specific noun can be recovered directly from the context. Otherwise, the word will be tagged as a noun.
For example, the word <span dir="rtl">عرب</span> 'Arabs' could be a noun or an adjective. <span dir="rtl">عرب</span> as in <span dir="rtl">جاء الرجال العرب</span> 'The Arab men came' is tagged as an adjective, whereas in <span dir="rtl">معجم لسان العرب</span> 'Lisan Al Arab dictionary' <span dir="rtl">عرب</span> is tagged as a noun.
- Although adjective must inflict in agreement with the noun, the features of the adjectives are annotated independently. In the example <span dir="rtl">كتب مهمة</span> the adjective <span dir="rtl">مهمة</span> is annotated with features feminine singular and NOT masculine plural.

**Examples**

Below are examples of inflection tables based on basic paradigms, which means that the inflections are for the complete set of possible morphological features except for clitic features. Adjectives, just like nouns, can inflect to full or partial paradigms.

??? optional-class "MSA: <bdi>أَمِين</bdi> _'faithful;loyal'_"

    | Word Form 	| POS.Features 	|  قسم الكلام.الخصائص  	|
    |:---------:	|:------------:	|:--------------------:	|
    |    أَمِين   	|   ADJ.MS.IU  	|      <bdi>صفة.نكرة.هو</bdi>     	|
    |    أَمِينٌ   	|   ADJ.MS.IN  	|   <bdi>صفة.نكرة.هو.مرفوع</bdi>  	|
    |    أَمِينٍ   	|   ADJ.MS.IG  	|   <bdi>صفة.نكرة.هو.مجرور</bdi>  	|
    |   أَمِيناً   	|   ADJ.MS.IA  	|   <bdi>صفة.نكرة.هو.منصوب</bdi>  	|
    |    أَمِينُ   	|   ADJ.MS.DN  	|  <bdi>صفة.معرفة.هو.مرفوع</bdi>  	|
    |    أَمِينُ   	|   ADJ.MS.CN  	|   <bdi>صفة.مضاف.هو.مرفوع</bdi>  	|
    |    أَمِينِ   	|   ADJ.MS.CG  	|   <bdi>صفة.مضاف.هو.مجرور</bdi>  	|
    |    أَمِينَ   	|   ADJ.MS.CA  	|   <bdi>صفة.مضاف.هو.منصوب</bdi>  	|
    |   أَمِينَة   	|   ADJ.FS.IU  	|      <bdi>صفة.نكرة.هي</bdi>     	|
    |   أَمِينَةٌ   	|   ADJ.FS.IN  	|   <bdi>صفة.نكرة.هي.مرفوع</bdi>  	|
    |   أَمِينَةٍ   	|   ADJ.FS.IG  	|   <bdi>صفة.نكرة.هي.مجرور</bdi>  	|
    |   أَمِينَةً   	|   ADJ.FS.IA  	|   <bdi>صفة.نكرة.هي.منصوب</bdi>  	|
    |   أَمِينَةُ   	|   ADJ.FS.DN  	|  <bdi>صفة.معرفة.هي.مرفوع</bdi>  	|
    |   أَمِينَةُ   	|   ADJ.FS.CN  	|   <bdi>صفة.مضاف.هي.مرفوع</bdi>  	|
    |   أَمِينَةِ   	|   ADJ.FS.CG  	|   <bdi>صفة.مضاف.هي.مجرور</bdi>  	|
    |   أَمِينَةَ   	|   ADJ.FS.CA  	|   <bdi>صفة.مضاف.هي.منصوب</bdi>  	|
    |   أَمِينانِ  	|   ADJ.MD.IN  	|  <bdi>صفة.نكرة.هما♂.مرفوع</bdi> 	|
    |   أَمِينَيْنِ  	|   ADJ.MD.IG  	|  <bdi>صفة.نكرة.هما♂.مجرور</bdi> 	|
    |   أَمِينَيْنِ  	|   ADJ.MD.IA  	|  <bdi>صفة.نكرة.هما♂.منصوب</bdi> 	|
    |   أَمِينانِ  	|   ADJ.MD.DN  	| <bdi>صفة.معرفة.هما♂.مرفوع</bdi> 	|
    |   أَمِينا   	|   ADJ.MD.CN  	|  <bdi>صفة.مضاف.هما♂.مرفوع</bdi> 	|
    |   أَمِينَيْ   	|   ADJ.MD.CG  	|  <bdi>صفة.مضاف.هما♂.مجرور</bdi> 	|
    |   أَمِينَيْ   	|   ADJ.MD.CA  	|  <bdi>صفة.مضاف.هما♂.منصوب</bdi> 	|
    |  أَمِينَتانِ  	|   ADJ.FD.IN  	|  <bdi>صفة.نكرة.هما♀.مرفوع</bdi> 	|
    |  أَمِينَتَيْنِ  	|   ADJ.FD.IG  	|  <bdi>صفة.نكرة.هما♀.مجرور</bdi> 	|
    |  أَمِينَتَيْنِ  	|   ADJ.FD.IA  	|  <bdi>صفة.نكرة.هما♀.منصوب</bdi> 	|
    |  أَمِينَتانِ  	|   ADJ.FD.DN  	| <bdi>صفة.معرفة.هما♀.مرفوع</bdi> 	|
    |   أَمِينَتا  	|   ADJ.FD.CN  	|  <bdi>صفة.مضاف.هما♀.مرفوع</bdi> 	|
    |   أَمِينَتَيْ  	|   ADJ.FD.CG  	|  <bdi>صفة.مضاف.هما♀.مجرور</bdi> 	|
    |   أَمِينَتَيْ  	|   ADJ.FD.CA  	|  <bdi>صفة.مضاف.هما♀.منصوب</bdi> 	|
    |   أُمَناء   	|   ADJ.MP.IU  	|     <bdi>صفة.نكرة.هم♂</bdi>     	|
    |   أُمَناءُ   	|   ADJ.MP.IN  	|  <bdi>صفة.نكرة.هم♂.مرفوع</bdi>  	|
    |   أُمَناءَ   	|   ADJ.MP.IG  	|  <bdi>صفة.نكرة.هم♂.مجرور</bdi>  	|
    |   أُمَناءَ   	|   ADJ.MP.IA  	|  <bdi>صفة.نكرة.هم♂.منصوب</bdi>  	|
    |   أُمَناءُ   	|   ADJ.MP.DN  	|  <bdi>صفة.معرفة.هم♂.مرفوع</bdi> 	|
    |   أُمَناءُ   	|   ADJ.MP.CN  	|  <bdi>صفة.مضاف.هم♂.مرفوع</bdi>  	|
    |   أُمَناءِ   	|   ADJ.MP.CG  	|  <bdi>صفة.مضاف.هم♂.مجرور</bdi>  	|
    |   أُمَناءَ   	|   ADJ.MP.CA  	|  <bdi>صفة.مضاف.هم♂.منصوب</bdi>  	|
    |   أَمِينات  	|   ADJ.FP.IU  	|      <bdi>صفة.نكرة.هن</bdi>     	|
    |   أَمِيناتٌ  	|   ADJ.FP.IN  	|   <bdi>صفة.نكرة.هن.مرفوع</bdi>  	|
    |   أَمِيناتٍ  	|   ADJ.FP.IG  	|   <bdi>صفة.نكرة.هن.مجرور</bdi>  	|
    |   أَمِيناتٍ  	|   ADJ.FP.IA  	|   <bdi>صفة.نكرة.هن.منصوب</bdi>  	|
    |   أَمِيناتُ  	|   ADJ.FP.DN  	|  <bdi>صفة.معرفة.هن.مرفوع</bdi>  	|
    |   أَمِيناتُ  	|   ADJ.FP.CN  	|   <bdi>صفة.مضاف.هن.مرفوع</bdi>  	|
    |   أَمِيناتِ  	|   ADJ.FP.CG  	|   <bdi>صفة.مضاف.هن.مجرور</bdi>  	|
    |   أَمِيناتِ  	|   ADJ.FP.CA  	|   <bdi>صفة.مضاف.هن.منصوب</bdi>  	|

??? optional-class "GLF: <bdi>مِتكَشِّخ</bdi> _'looking elegant'_"

    | Word Form         	| POS.Features 	| قسم الكلام.الخصائص    	|
    |:------------------:	|:------------:	|:------------------:	|
    |   <bdi>  متكشخ</bdi>  	| ADJ.MS       	|    <bdi>صفة.هو</bdi> 	|
    |   <bdi> متكشخة</bdi>  	| ADJ.FS       	|    <bdi>صفة.هي</bdi> 	|
    |   <bdi>متكشخين</bdi>  	| ADJ.MP       	|    <bdi>صفة.هم</bdi> 	|
    |   <bdi>متكشخات</bdi>  	| ADJ.FP       	|    <bdi>صفة.هن</bdi> 	|


??? optional-class "EGY: <bdi>جَدَع</bdi> _'strong;macho'_"

    | Word Form         	| POS.Features 	| قسم الكلام.الخصائص 	|
    |:------------------:	|:------------:	|:------------------:	|
    |    <bdi>   جدع</bdi> 	| ADJ.MS       	|  <bdi>صفة.هو</bdi> 	|
    |    <bdi>  جدعة</bdi> 	| ADJ.FS       	|  <bdi>صفة.هي</bdi> 	|
    |    <bdi> جدعان</bdi> 	| ADJ.UP       	| <bdi>صفة.هم⚥</bdi> 	|

<br>

#### ADJ_NUM - <span dir="rtl">صفة_عدد</span>

**Ordinal numbers**
: Ordinal numbers are used for ranking.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect 	|
|-----------	|--------------	|--------------------	|---------------	|----------	|
| الاوائل   	| ADJ_NUM.MP   	| صفة_عدد.هم         	| the first     	| GLF,EGY  	|
| اول       	| ADJ_NUM.MS   	| صفة_عدد.هو         	| first         	| GLF,EGY  	|
| الثانية   	| ADJ_NUM.FS   	| صفة_عدد.هي         	| second        	| GLF,EGY  	|

_Examples for **MSA** and other dialecs will be added soon_
<br>
#### ADJ_COMP - <span dir="rtl">صفة_مقارنة</span>

**Comparative Adjectives**
: A comparative adjective is a form derived from verbs according to their inflectional category.

**Notes**:

- No morphological distinction is made between the comparative and the superlative meanings. The distinction is made based on the use of idafa (construct) with the superlative.


**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect 	|
|-----------	|--------------	|--------------------	|---------------	|----------	|
| ابرك      	| ADJ_COMP.MS  	| صفة_مقارنة.هو      	| better;best   	| GLF      	|
| اقل       	| ADJ_COMP.MS  	| صفة_مقارنة.هو      	| less;least    	| GLF      	|
| احسن      	| ADJ_COMP.MS  	| صفة_مقارنة.هو      	| better;best   	| GLF      	|

_Examples for **MSA** and other dialecs will be added soon_
<br>


#### VERB - <span dir="rtl">فعل</span>

**Verbs**
: A verb is a word used to describe an action, state, or occurrence, and forming the main part of the predicate of a sentence.

**Examples**

Below are examples of inflection tables based on basic paradigms, which means that the inflections are for the complete set of possible morphological features except for clitic features.


??? optional-class "GLF: <bdi>سار</bdi> _'go;walk'_"

    |  Word Form        	|  POS.FEATURES 	|  قسم_الكلام.الخصائص.           	|
    |-------------------	|---------------	|------------------------------:	|
    |    <bdi>    سرت</bdi> 	|  VERB.P1S     	|    <bdi>    فعل.ماضي.انا</bdi> 	|
    |    <bdi>   سرنا</bdi> 	|  VERB.P1P     	|    <bdi>    فعل.ماضي.نحن</bdi> 	|
    |    <bdi>    سرت</bdi> 	|  VERB.P2MS    	|    <bdi>   فعل.ماضي.انت♂</bdi> 	|
    |    <bdi>   سرتي</bdi> 	|  VERB.P2FS    	|    <bdi>   فعل.ماضي.انت♀</bdi> 	|
    |    <bdi>  سرتوا</bdi> 	|  VERB.P2P     	|    <bdi>  فعل.ماضي.انتم⚥</bdi> 	|
    |    <bdi>  سرتوا</bdi> 	|  VERB.P2MP    	|    <bdi>  فعل.ماضي.انتم♂</bdi> 	|
    |    <bdi>   سرتن</bdi> 	|  VERB.P2FP    	|    <bdi>   فعل.ماضي.انتن</bdi> 	|
    |    <bdi>    سار</bdi> 	|  VERB.P3MS    	|    <bdi>     فعل.ماضي.هو</bdi> 	|
    |    <bdi>   سارت</bdi> 	|  VERB.P3FS    	|    <bdi>     فعل.ماضي.هي</bdi> 	|
    |    <bdi>  ساروا</bdi> 	|  VERB.P3P     	|    <bdi>    فعل.ماضي.هم⚥</bdi> 	|
    |    <bdi>  ساروا</bdi> 	|  VERB.P3MP    	|    <bdi>    فعل.ماضي.هم♂</bdi> 	|
    |    <bdi>   سارن</bdi> 	|  VERB.P3FP    	|    <bdi>     فعل.ماضي.هن</bdi> 	|
    |    <bdi>   اسير</bdi> 	|  VERB.I1S     	|    <bdi>   فعل.مضارع.انا</bdi> 	|
    |    <bdi>   نسير</bdi> 	|  VERB.I1P     	|    <bdi>   فعل.مضارع.نحن</bdi> 	|
    |    <bdi>   تسير</bdi> 	|  VERB.I2MS    	|    <bdi>  فعل.مضارع.انت♂</bdi> 	|
    |    <bdi> تسيرين</bdi> 	|  VERB.I2FS    	|    <bdi>  فعل.مضارع.انت♀</bdi> 	|
    |    <bdi> تسيرون</bdi> 	|  VERB.I2P     	|    <bdi> فعل.مضارع.انتم⚥</bdi> 	|
    |    <bdi> تسيرون</bdi> 	|  VERB.I2MP    	|    <bdi> فعل.مضارع.انتم♂</bdi> 	|
    |    <bdi>  تسيرن</bdi> 	|  VERB.I2FP    	|    <bdi>  فعل.مضارع.انتن</bdi> 	|
    |    <bdi>   يسير</bdi> 	|  VERB.I3MS    	|    <bdi>    فعل.مضارع.هو</bdi> 	|
    |    <bdi>   تسير</bdi> 	|  VERB.I3FS    	|    <bdi>    فعل.مضارع.هي</bdi> 	|
    |    <bdi> يسيرون</bdi> 	|  VERB.I3P     	|    <bdi>   فعل.مضارع.هم⚥</bdi> 	|
    |    <bdi> يسيرون</bdi> 	|  VERB.I3MP    	|    <bdi>   فعل.مضارع.هم♂</bdi> 	|
    |    <bdi>  يسيرن</bdi> 	|  VERB.I3FP    	|    <bdi>    فعل.مضارع.هن</bdi> 	|
    |    <bdi>    سير</bdi> 	| VERB.C2MS     	|    <bdi>    فعل.أمر.أنت♂</bdi> 	|
    |    <bdi>   سيري</bdi> 	| VERB.C2FS     	|    <bdi>    فعل.أمر.أنت♀</bdi> 	|
    |    <bdi>  سيروا</bdi> 	| VERB.C2P      	|    <bdi>   فعل.أمر.انتم⚥</bdi> 	|
    |    <bdi>  سيروا</bdi> 	| VERB.C2MP     	|    <bdi>   فعل.أمر.انتم♂</bdi> 	|
    |    <bdi>   سيرن</bdi> 	| VERB.C2FP     	|    <bdi>    فعل.أمر.انتن</bdi> 	|

??? optional-class "EGY: <bdi>مِضِي</bdi> _'walk;proceed'_"

    |  Word Form        	|  POS.FEATURES 	|  قسم_الكلام.الخصائص            	|
    |-------------------	|---------------	|------------------------------:	|
    |     <bdi>  مشيت</bdi> 	|  VERB.P1S     	|    <bdi>    فعل.ماضي.انا</bdi> 	|
    |     <bdi> مشينا</bdi> 	|  VERB.P1P     	|    <bdi>    فعل.ماضي.نحن</bdi> 	|
    |     <bdi>  مشيت</bdi> 	|  VERB.P2MS    	|    <bdi>   فعل.ماضي.انت♂</bdi> 	|
    |     <bdi> مشيتي</bdi> 	|  VERB.P2FS    	|    <bdi>   فعل.ماضي.انت♀</bdi> 	|
    |     <bdi>مشيتوا</bdi> 	|  VERB.P2P     	|    <bdi>  فعل.ماضي.انتم⚥</bdi> 	|
    |     <bdi>   مشي</bdi> 	|  VERB.P3MS    	|    <bdi>     فعل.ماضي.هو</bdi> 	|
    |     <bdi>  مشيت</bdi> 	|  VERB.P3FS    	|    <bdi>     فعل.ماضي.هي</bdi> 	|
    |     <bdi> مشيوا</bdi> 	|  VERB.P3P     	|    <bdi>    فعل.ماضي.هم⚥</bdi> 	|
    |     <bdi>  امشي</bdi> 	|  VERB.I1S     	|    <bdi>   فعل.مضارع.انا</bdi> 	|
    |     <bdi>  نمشي</bdi> 	|  VERB.I1P     	|    <bdi>   فعل.مضارع.نحن</bdi> 	|
    |     <bdi>  تمشي</bdi> 	|  VERB.I2MS    	|    <bdi>  فعل.مضارع.انت♂</bdi> 	|
    |     <bdi>  تمشي</bdi> 	|  VERB.I2FS    	|    <bdi>  فعل.مضارع.انت♀</bdi> 	|
    |     <bdi> تمشوا</bdi> 	|  VERB.I2P     	|    <bdi> فعل.مضارع.انتم⚥</bdi> 	|
    |     <bdi>  يمشي</bdi> 	|  VERB.I3MS    	|    <bdi>    فعل.مضارع.هو</bdi> 	|
    |     <bdi>  تمشي</bdi> 	|  VERB.I3FS    	|    <bdi>    فعل.مضارع.هي</bdi> 	|
    |     <bdi> يمشوا</bdi> 	|  VERB.I3P     	|    <bdi>   فعل.مضارع.هم⚥</bdi> 	|
    |    <bdi>    امشي</bdi> 	| VERB.C2MS     	|    <bdi>    فعل.أمر.أنت♂</bdi> 	|
    |    <bdi>   امشي</bdi> 	| VERB.C2FS     	|    <bdi>    فعل.أمر.أنت♀</bdi> 	|
    |    <bdi>  امشوا</bdi> 	| VERB.C2P      	|    <bdi>   فعل.أمر.انتم⚥</bdi> 	|


_Examples for **MSA** will be added soon_
<br>
#### VERB_PSEUDO - <span dir="rtl">شبه_فعل</span>

**Pseudo Verbs**
: Pseudo verbs are words that have the same syntactic behavior as verbs in that they take a subject and a predicate, or a sentential complement.

**Notes**:

- Pseduo verbs don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	|          English Gloss          	|        Dialect<br>Example        	|
|:---------:	|:------------:	|:------------------:	|:-------------------------------:	|:--------------------------------:	|
|    ريت    	|  VERB_PSEUDO 	|       شبه_فعل      	|           if only;wish          	|   GLF,EGY<br> يا ريتْني ما جيت   	|
|    ترى    	|  VERB_PSEUDO 	|       شبه_فعل      	| by the way;for your information 	| GLF<br>ترى الرحلة طويلة لإيطاليا 	|
|     تو    	|  VERB_PSEUDO 	|       شبه_فعل      	|      just now;at the moment     	|   GLF<br>كانت توها داشة الفيلا   	|

_Examples for **MSA** and other dialects will be added soon_
<br>

#### VERB_NOM - <span dir="rtl">اسم_فعل</span>

**Non-Inflectional verbs**, also called **Frozen Verbs** 
: These are frozen expressions that behave like verbs syntactically but not morphologically. From a morphological point of view they are not inflectional, meaning that they do not inflect for all their tenses, sometimes none, and they do not have gender/number agreement. Syntactically, they subcategorize for arguments in the form of prepositional phrases and direct objects.


**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss                  	| Diaclect 	|
|----------------	|--------------	|--------------------	|--------------------------------	|----------	|
| (ما) عدا       	| VERB_NOM     	| اسم_فعل            	| except                         	| GLF,EGY 	|
| آمين           	| VERB_NOM     	| اسم_فعل            	| Amen                           	| GLF,EGY 	|
| اف             	| VERB_NOM     	| اسم_فعل            	| ugh                            	| GLF,EGY 	|
| اخص            	| VERB_NOM     	| اسم_فعل            	| Shame on you!                  	| EGY      	|
| آه             	| VERB_NOM     	| اسم_فعل            	| Ah!                            	| GLF,EGY 	|
| اوه            	| VERB_NOM     	| اسم_فعل            	| Ah!                            	| GLF,EGY 	|
| ما             	| VERB_NOM     	| اسم_فعل            	| not                            	| GLF,EGY 	|
| حاشا           	| VERB_NOM     	| اسم_فعل            	| except                         	| GLF,EGY 	|
| يالله          	| VERB_NOM     	| اسم_فعل            	| hurry up;come on               	| GLF,EGY 	|
| ايا            	| VERB_NOM     	| اسم_فعل            	| watch out {+ pronoun enclitic} 	| GLF,EGY 	|

_Examples for **MSA** will be added soon_
<br>

#### ADV - <span dir="rtl">ظرف</span>

**Adverbs**
: Adverbs are invariable and terminal words that give information about the time, location, manner, cause, purpose, or any other adverbial function modifying the verb or sentence.

**Notes**:

- A word is invariable as it does not participate in an idafa construction. A word is terminal when nothing modifies it.
- Some adverbs take pronominal clitics, in such cases, those pronouns are going to be cliticized normally. Example, <span dir="rtl">يا دوب +ك</span>. Also, note that adverbs with initial <span dir="rtl">يا</span> are considered to be two separate words.
- Adverbs don't take features.

**Examples**

| Word Form 	| POS.Features 	| قسم_الكلام.الخصائص 	| English Gloss                                                              	| Diaclect 	|
|-----------	|--------------	|--------------------	|----------------------------------------------------------------------------	|----------	|
| لسة       	| ADV          	| ظرف                	| still                                                                      	| EGY      	|
| يا دوب    	| ADV          	| ظرف                	| It’s high time; a little;yet;still;just                                    	| EGY      	|
| دلوقت     	| ADV          	| ظرف                	| Now;at this moment;at this time;at present                                 	| EGY      	|
| هنا       	| ADV          	| ظرف                	| here                                                                       	| GLF,EGY 	|
| هناك      	| ADV          	| ظرف                	| there                                                                      	| GLF,EGY 	|
| كمان      	| ADV          	| ظرف                	| also;too                                                                   	| GLF,EGY 	|
| برضك      	| ADV          	| ظرف                	| also;too;nevertheless;even so;all the same. intensifier « really, surely » 	| EGY      	|
| برضو      	| ADV          	| ظرف                	| also;too;nevertheless;even so;all the same. intensifier « really, surely » 	| EGY      	|
| بعدين     	| ADV          	| ظرف                	| later;next                                                                 	| GLF,EGY 	|
| امال      	| ADV          	| ظرف                	| hence;then;so                                                              	| EGY      	|
| بس        	| ADV          	| ظرف                	| only;enough                                                                	| GLF,EGY 	|
| بقى       	| ADV          	| ظرف                	| so;then                                                                    	| EGY      	|
| بعد       	| ADV          	| ظرف                	| also;still                                                                 	| GLF      	|
| هني       	| ADV          	| ظرف                	| here                                                                       	| GLF      	|
| سيدا      	| ADV          	| ظرف                	| straight ahead                                                             	| GLF      	|


_Examples for **MSA** will be added soon_
<br>


#### ADV_INTERROG - <span dir="rtl">ظرف_استفهام</span>

**Interrogative Adverbs**
: Interrogative adverbs are invariable words that introduce questions that give specific information about time, location, manner, or purpose.

**Notes**:

- Interrogative Adverbs don't take any features

**Examples**

| Word From 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Dialect 	|
|-----------	|--------------	|--------------------	|---------------	|---------	|
| شلون      	| ADV_INTERROG 	| ظرف_استفهام        	| how           	| GLF     	|
| كيف       	| ADV_INTERROG 	| ظرف_استفهام        	| how           	| GLF     	|
| وشي       	| ADV_INTERROG 	| ظرف_استفهام        	| how           	| GLF     	|
| متى       	| ADV_INTERROG 	| ظرف_استفهام        	| when          	| GLF     	|
| وين       	| ADV_INTERROG 	| ظرف_استفهام        	| where         	| GLF     	|
| ليش       	| ADV_INTERROG 	| ظرف_استفهام        	| why           	| GLF     	|

_Examples for **MSA** and other dialects will be added soon_
<br>

#### ADV_REL - <span dir="rtl">ظرف_موصول</span>


**Relative Adverbs**
: Relative adverbs are invariable words that introduce adverbial relative clauses that give specific information about time, location, manner, or purpose.

**Notes**:

- Relative Adverbs don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect<br>Example         	|
|-----------	|--------------	|--------------------	|---------------	|-----------------------------	|
| وين       	| ADV_REL      	| ظرف_موصول          	| where         	| GLF<br>لازم تخبرني وين سرت  	|
| فين       	| ADV_REL      	| ظرف_موصول          	| where         	| EGY<br>لازم تقول لي رحت فين 	|
| أين       	| ADV_REL      	| ظرف_موصول          	| where         	| MSA<br>أخبرني إلى أين ذهبت  	|



#### PREP - <span dir="rtl">حرف_جر</span>

**Prepositions**
: The term **preposition** is used to represent the closed class of items which have traditionally been identified as prepositions in Arabic.

**Notes**:

- Prepositions don't take any features.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect      	|
|-----------	|--------------	|--------------------	|---------------	|---------------	|
| في        	| PREP         	| حرف_جر             	| in, at        	| MSA,GLF,EGY 	|
| مع        	| PREP         	| حرف_جر             	| with          	| MSA,GLF,EGY 	|
| ويّا       	| PREP         	| حرف_جر             	| with          	| MSA,GLF,EGY 	|
| ب+        	| PREP         	| حرف_جر             	| with          	| MSA,GLF,EGY 	|
| و+        	| PREP         	| حرف_جر             	| by            	| MSA,GLF,EGY 	|



#### INTERJ - <span dir="rtl">تعجب</span>
 
 **Interjections**
: Interjections are words or phrases (response particles) that express the speaker’s reaction to a particular proposition or sentence.

**Notes**:

- Interjections don't take any features.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss     	| Diaclect 	|
|-----------	|--------------	|--------------------	|-------------------	|----------	|
| بس        	| INTERJ       	| تعجب               	| enough            	| GLF,EGY 	|
| مرحبا     	| INTERJ       	| تعجب               	| hello             	| GLF,EGY 	|
| الو       	| INTERJ       	| تعجب               	| hello (on phone)  	| GLF,EGY 	|
| يالله     	| INTERJ       	| تعجب               	| hurry up;come on! 	| GLF,EGY 	|
| لأ        	| INTERJ       	| تعجب               	| no                	| GLF,EGY 	|
| انزين     	| INTERJ       	| تعجب               	| OK                	| GLF      	|
| اوكيه     	| INTERJ       	| تعجب               	| OK                	| GLF,EGY 	|
| حشى       	| INTERJ       	| تعجب               	|                   	| GLF      	|

_Examples for **MSA**  will be added soon_
<br>

#### CONJ - <span dir="rtl">حرف_عطف</span>

**Coordinating Conjunctions**
: Conjunctions are used to coordinate and link independent constituents with each other.

**Notes**:

- Conjunctions don't take any features.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss     	| Diaclect      	|
|-----------	|--------------	|--------------------	|-------------------	|---------------	|
| بس        	| CONJ         	| حرف_عطف            	| But               	| GLF,EGY      	|
| و+        	| CONJ         	| حرف_عطف            	| and               	| MSA,GLF,EGY 	|
| ف+        	| CONJ         	| حرف_عطف            	| and, then         	| MSA,GLF,EGY 	|
| ولا       	| CONJ         	| حرف_عطف            	| or (in questions) 	| GLF,EGY      	|




#### CONJ_SUB - <span dir="rtl">أداة_ربط</span>



**Subordinating Conjunctions**
: A subordinating conjunction marks a sentence as dependent to another sentence that is independent and called the main clause.

**Notes**:

- Subordinating conjunction don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect      	|
|-----------	|--------------	|--------------------	|---------------	|---------------	|
| و+        	| CONJ_SUB     	| أداة_ربط           	| while         	| MSA,GLF,EGY 	|

_More examples  will be added soon_
<br>


#### PART_VOC - <span dir="rtl">حرف_نداء</span>



**Vocative Particles**

**Notes**:

- Vocative Particles don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	|    Diaclect   	|
|-----------	|:------------:	|:------------------:	|:-------------:	|:-------------:	|
| يا        	| PART_VOC     	| حرف_نداء           	| O!;hey!       	| MSA,GLF,EGY 	|


_More examples  will be added soon_
<br>

#### PART_RESTRICT - <span dir="rtl">اداة_استثناء</span>



**Restrictive Particles**
: A restrictive particle is used in a negative construction marking a restriction.

**Notes**:

- Restrictive Particles don't take any features

**Examples**

| Word Form 	| POS.Features  	| قسم الكلام.الخصائص 	| English Gloss   	| Comments/Examples/Diaclect 	|
|-----------	|---------------	|--------------------	|-----------------	|----------------------------	|
| الا       	| PART_RESTRICT 	| اداة_استثناء       	| except for;only 	| MSA,GLF,EGY              	|

_More examples  will be added soon_
<br>



#### PART_NEG - <span dir="rtl">اداة_نفي</span>



**Negative Particles**
: A particle that negate what comes after it.

**Notes**:

- Negative particles don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss   	| Diaclect      	|
|-----------	|--------------	|--------------------	|-----------------	|---------------	|
| م+        	| PART_NEG     	| اداة_نفي           	| not             	| GLF,EGY      	|
| ما        	| PART_NEG     	| اداة_نفي           	| not             	| MSA,GLF,EGY 	|
| مب        	| PART_NEG     	| اداة_نفي           	| not             	| GLF           	|
| هب        	| PART_NEG     	| اداة_نفي           	| not             	| GLF           	|
| لا        	| PART_NEG     	| اداة_نفي           	| not;neither;nor 	| MSA,GLF,EGY 	|

_More examples  will be added soon_
<br>


#### PART_DET - <span dir="rtl">اداة_تعريف</span>



**Determiner Particles**
: A clitic that attaches to nominals.

**Notes**:

- Determiner particles don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Comments/Examples/Diaclect 	|
|-----------	|:------------:	|:------------------:	|:-------------:	|:--------------------------:	|
| ال+       	| PART_DET     	| اداة_تعريف         	| the           	| MSA,GLF,EGY               	|



#### PART_INTERROG - <span dir="rtl">اداة_استفهام</span>



**Interrogative Particles**
: Interrogative particles introduce questions.

**Notes**:

- Interrogative particles don't take any features



#### PART_FUT - <span dir="rtl">اداة_استقبال</span>



**Future Particles**
: Interrogative particles mark the future when attaches to imperfective verbs.

**Notes**:

- Future particles don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect 	|
|-----------	|--------------	|--------------------	|---------------	|----------	|
| ب+        	| PART_FUT     	| اداة_استقبال       	| will          	| GLF      	|
| ح+        	| PART_FUT     	| اداة_استقبال       	| will          	| EGY      	|
| ه+        	| PART_FUT     	| اداة_استقبال       	| will          	| EGY      	|
| س+        	| PART_FUT     	| اداة_استقبال       	| will          	| MSA      	|
| سوف       	| PART_FUT     	| اداة_استقبال       	| will          	| MSA      	|
| رح        	| PART_FUT     	| اداة_استقبال       	| will          	| GLF      	|



#### PART_FOCUS - <span dir="rtl">اداة_تفصيل</span>



**Focus Particles**
: Focus particles highlight the topic of the sentence or adds emphasis.

**Notes**:

- Focus particles don't take any features.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect      	|
|-----------	|--------------	|--------------------	|---------------	|---------------	|
| اما       	| PART_FOCUS   	| اداة_تفصيل         	| as for        	| MSA,GLF,EGY 	|

_More examples  will be added soon_
<br>

#### PART_EMPHATIC - <span dir="rtl">اداة_توكيد</span>



**Emphatic Particles**
: Emphatic particles adds emphasis.

**Notes**:

- Emphatic particles don't take any features.

**Examples**

| Word Form 	| POS.Features  	| قسم الكلام.الخصائص 	| English Gloss 	| Comments/Examples/Diaclect 	|
|----------------	|---------------	|--------------------	|---------------	|----------------------------	|
| ل+             	| PART_EMPHATIC 	| اداة_توكيد         	| that          	| MSA,GLF,EGY              	|

_More examples  will be added soon_
<br>

#### PART_RC - <span dir="rtl">جواب_شرط</span>

**Response Conditional Particles**
: Response conditional particles are used in conditional sentences introducing the apodosis sentence/main clause.

**Notes**:

- Response conditional particles don't take any features.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Comments/Examples/Diaclect 	|
|----------------	|--------------	|--------------------	|---------------	|----------------------------	|
| ف+             	| PART_RC      	| جواب_شرط           	| so then       	| MSA,GLF,EGY              	|

_More examples  will be added soon_
<br>

#### PART - <span dir="rtl">حرف</span>



**Particles**
: Particles do not assign case and they can be omitted without affecting or altering meaning and/or structure.

**Notes**:

- Particles don't take any features.

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect<br>Example                  	|
|----------------	|--------------	|--------------------	|---------------	|--------------------------------------	|
| و+             	| PART         	| حرف                	| and           	| GLF,EGY                             	|
| جان            	| PART         	| حرف                	| if, and so    	| GLF<br>لولاها جان ما كانت الكل بالكل 	|

_More examples  will be added soon_
<br>

#### PART_PROG - <span dir="rtl">حرف_مضارعة</span>



**Progressive Particle**
: Denotes that a verb is in action

**Notes**:

- Progressive particles attache to imperfective verbs only.
- Progressive particles don't take any features.

**Example**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss 	| Diaclect<br>Example 	|
|----------------	|--------------	|--------------------	|---------------	|---------------------	|
| ب+             	| PART_PROG    	| حرف_مضارعة         	|               	| EGY                 	|

_More examples  will be added soon_
<br>

#### PART_CONNECT - <span dir="rtl">حرف_ربط</span>



**Connective Particles**
: Connective particles connect two clauses. They are most commonly used to introduce a comment clause after a clause starting with <span dir="rtl">اما</span>.

- Connective particles don't take any features

**Examples**

| Word Form 	| POS.Features 	| قسم الكلام.الخصائص 	| English Gloss          	| Diaclect 	|
|----------------	|--------------	|--------------------	|------------------------	|----------	|
| ف+             	| PART_CONNECT 	| حرف_ربط            	| {Discourse connective} 	| GLF,EGY 	|



* * *

### Aditional Annotation Tasks

#### Lemmatization


The lemma is the citation form of the word.
Across all our guidelines, we follow the lemma specification in 
(Graff et al, 2009), where:

- The lemma of all **nominals** is the masculine singular form of the word or 
the feminine singular form if no masculine form exists.
- The lemma of a **verb** is the perfective 3rd person masculine singular form.
- For all others (i.e. particles, adverbs, ... etc) the lemma is the same 
form as the baseword.

**Notes**:

- For some nominal cases such as <span dir="rtl">اسم الوحدة</span> ‘collective plurals’ which are also 
uncountable nouns, the lemma is the same as the noun. See examples below.
- The diacritization of the lemma includes adding all the short vowel diacritics 
except for the sukun ‘absence of a vowel’.
- Cases to look out for are the <span class="caphi">/oo/</span> and <span class="caphi">/ee/</span> long vowels. The vowel <span class="caphi">/oo/</span> is marked as <span dir="rtl">ـَو</span>, <span class="caphi">/ee/</span> is marked either as <span dir="rtl">ـَي</span> or <span dir="rtl">ـِا</span>.
- In the case of long vowels <span class="caphi">/aa/</span>, <span class="caphi">/uu/</span>, and <span class="caphi">/ii/</span> a short vowel marker of the same kind precedes the long vowel (i.e. <span dir="rtl">ـَا</span>, <span dir="rtl">ـُو</span>, and <span dir="rtl">ـِي</span>).

| Word Form 	| Lemma 	| POS       	| English        	| Diaclect<br>Comments   	|
|-------------	|-------	|-----------	|----------------	|------------------------------	|
| كتب         	| كِتاب  	| NOUN.MP   	| books          	| GLF,EGY                      	|
| كتبوا       	| كَتَب   	| VERB.P3MP 	| They wrote     	| GLF,EGY                      	|
| تفاح        	| تُفَّاح  	| NOUN.MS   	| apples         	| GLF,EGY<br>collective plurals 	|
| تفاحة       	| تُفَّاحَة 	| NOUN.FS   	| apple          	| GLF,EGY                      	|
| تفاحات      	| تُفَّاحَة 	| NOUN.FP   	| apples         	| GLF,EGY                      	|
| تمر         	| تَمر   	| NOUN.MS   	| dates (fruit)  	| GLF,EGY<br>collective plurals 	|
| تمور        	| تَمر   	| NOUN.MP   	| dates (fruit)  	| GLF,EGY                      	|
| تمرة        	| تَمرَة  	| NOUN.FS   	| date (fruit)   	| GLF,EGY                      	|
| تمرات       	| تَمرَة  	| NOUN.FP   	| dates (fruit)  	| GLF,EGY                      	|
| ناس         	| نَاس   	| NOUN.MP   	| people, humans 	| GLF,EGY<br>collective plurals 	|



#### Gloss


The English gloss refers to the semantic translation of the Arabic lemma.

**Notes**:

- For nominals the gloss is the singular form of the word.
- For verbs the gloss infinitive form.

| Lemma 	| Word Form 	| POS.      	| English Gloss 	| Comments/Examples/Diaclect 	|
|-------	|-------------	|-----------	|---------------	|----------------------------	|
| كِتاب  	| كتب         	| NOUN.MP   	| book          	| GLF,EGY                    	|
| كَتَب   	| كتبوا       	| VERB.P3MP 	| write         	|                            	|



#### Dialect Identification

Dialect identification (DID) is the task of tagging a certain context with a given dialect tag.

Deciding the dialect tag depends on the context of the sentence and/or the document. As dialects may share the same words within themselves or with MSA, the dialect is inferred from the sentence structure and word order of that specific dialect.

Although all words belonging to the same sentence may get the same dialect tag, in some cases two different dialectal structure could occur in the same sentence, hence we tag per word



## Acknowledgments

- This work was funded by a Research Enhancement Fund from New York University Abu Dhabi
- Portions of the Egyptian Arabic Guidelines are based on the LDC's Egyptian Arabic Morphological Guidelines (Maamouri et al., 2013)
- Portions of the Gulf entries are from the textbook: Ramsah, An Introduction to learning Emirati Dialect and Culture (Nasser Isleem and Ayesha Al Hashemi, 2015)

[^1]: Refer to the [phonology guidelines](www.camel-lab.com) for the complete CAPHI reference. <!--link to phonology page-->
[^2]: 'Ta Marbuta' suffix is usually used to mark the feminine gender.
[^3]: [_Colorless green ideas sleep furiously_](https://en.wikipedia.org/wiki/Colorless_green_ideas_sleep_furiously)
[^4]: The feminine singualr form مَلِكَة translates to 'Queen' in English.
