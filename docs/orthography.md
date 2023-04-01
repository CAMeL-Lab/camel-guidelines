---
layout: single
title: CAMeL Guidelines | Orthography
moreExamples: Click Here For More Examples
permalink: /orthography/
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---


<!-- expandable: -->
<!-- {%set more = 'See examples' %}
??? optional-class "{{ more }}"
    abc -->


# CODA*: Conventional Orthography for Dialectal Arabic 


## CODA* Mission
* Dialectal Arabic (DA) refers to the day-to-day vernaculars spoken in the Arab world. DA lives side-by-side with the official language, Modern Standard Arabic (MSA). DA differs from MSA on all levels of linguistic representation, from phonology and morphology to lexicon and syntax. Unlike MSA, DA has no standard orthography since there are no Arabic dialect academies, nor is there a large edited body of dialectal literature that follows the same spelling standard.
* CODA* (pronounced CODA Star, as in, for any dialect) is a conventional orthography for dialectal Arabic. It is designed primarily for the purpose of developing computational models of Arabic dialects.

## CODA* Goals & Intentions
1. CODA* is an internally consistent and coherent convention for writing DA.
2. CODA* is created for computational purposes.
3. CODA* uses the Arabic script.
4. CODA* is a unified framework for writing all DAs.
5. CODA* aims to strike an optimal balance by maintaining a level of dialectal uniqueness yet establish conventions based on MSA-DA similarities.
6. CODA* strives to be easily learnable and readable.

## CODA Design Principles
1. CODA* is an ad hoc convention. There are numerous decisions that could have been made differently especially when it comes to the phonology/orthography interface. These principles make CODA* comparable to English spelling (a bit phonological, a bit historical, with some exceptions). In some cases, we followed decisions that have been made by previously published efforts.
2. CODA* uses only the inventory of Arabic script characters including the diacritics used for writing MSA. CODA* does not use extended Arabic characters, e.g. from Persian or Urdu. CODA* can be written undiacritized or diacritized.
3. Each DA word has a unique orthographic form in CODA that represents its phonology, morphology, and lexical semantics [meaning].
4. As a general rule, CODA* uses MSA-like orthographic decisions (rules, exceptions and ad hoc choices), e.g., cliticizing single letter particles, using Shadda for phonological gemination, using Ta-Marbuta, Alif Maqsura, silent Alif in Waw-Alif of plurality, and spelling the definite article Al morphemically. 
5. CODA* generally preserves the phonological form of dialectal words given the unique phonological rules of each dialect (e.g., vowel shortening), and the limitations of Arabic script (e.g., using a diacritic and a glide consonant to write a long vowel). Two important ad hoc exceptions pertain to specific root radical letters that happen to be highly variant across dialects, e.g. ق، ث، ذ، ظ، ج , etc. and to long pattern vowels that can be shortened deterministically in the dialects, e.g., the pattern 1awA2iy3 فواعيل. For these cases, the word is written using the MSA cognate root radicals or pattern.
6. CODA* preserves dialectal morphology (e.g., dialectal clitics حتقول instead of ستقول). The only exception here is separating the negation and indirect object pronouns although they are part of the word: e.g. (Cairo): ما قلت لهاش /m a # 2 u l t # i l h aa sh/ ‘I did not tell her’.
7. CODA* preserves dialectal syntax, i.e. there is no change in word order.
8. CODA* aims to be easy to learn and write, encouraging high inter-annotator agreement; the more CODA* looks like what a dialect speaker may write, the better.
9. CODA* rules are dialect independent.  (note that dialect-specific exception lists from previous CODA versions have been redesigned and unified into dialect independent sets of specific rules).
10. CODA* specific rules override general rules and apply to certain pre-defined classes of words – roughly corresponding to closed class or highly marking frequent words. The aim is to preserve important morphological information, maintain dialect integrity, and ensure overall readability.

## CODA* Rules

### Introduction

CODA* (pronounced CODA Star, as in, for any dialect) is a conventional orthography for dialectal Arabic. It is designed primarily for the purpose of developing computational models of Arabic dialects. See CODA* Main Page for a description of CODA* mission statement and design guidelines.

Some sections of these guidelines are continuously researched and updated as more dialectal data is incorporated.

(CODA* version: 0.43)
  
### Basic Terminology

#### Sounds - Letters - Diacritics

The term sounds is used in the context of pronunciation (phonology), while letters and diacritics are used in the context of writing (orthography). Sounds can be consonants or vowels, and they are represented using the CAPHI representation (see Phonology Reference) and are bounded by forward slashes when necessary. Letters and diacritics are symbols used in the Arabic script to write words. Letters in the Arabic language are always required to be written; while diacritics are optional.

The space for consonants and vowels is shared by letters and diacritics, neither of which is exclusive to either category of symbols. To understand this shared space, keep in mind the following:

***

Letters can be used to write:

* Consonants - /b/, written "ب"; /y/, written "ي", i.e: /b aa b/, باب, 'door'; or /y i k t u b/, يكتب, 'he writes'
* Vowels - /i/, written "ي", i.e: /k i t aa b i/, كتابي, 'my book'

***

Diacritics can be used to specify:

* No vowel - “ ْ ” (Sukuun), i.e: /k a l b/, كلْب, 'dog'
* Double consonants - “ ّ ”ّ, (Shadda), i.e: /k a s s a r/, كسّر, 'he broke'
* Vowels - “ َ ” (Fatha), i.e: /k a t a b/, كَتَب, 'he wrote'
* Vowels+consonants - “ ً ”, /a n/, (Nunation), i.e: /f i 3 l a n/, فعلاً, 'verily'

<!-- #### Basic Terminology -->

#### Patterns - Other Morphemes

Arabic’s templatic morphology makes common reference to the concept of the root, a typically tri-consonantal abstraction capturing a general meaning about the word. For example, the root ك.ت.ب 'writing-related' appears in words like مكتب 'office' and كتاب 'book'. Each sound in the root is referred to as a radical. The general complement of the root is the pattern, which in the examples above are ma12a3 and 1i2A3 (here, 1, 2, 3 are slots for the root radicals). In addition to the root and pattern templatic morphemes, Arabic uses numerous other concatenative morphemes.

<!-- #### Basic Terminology -->

#### Words - Base Words - Clitics


We define an Arabic base word to consist of a stem and the minimal number of concatenative affixes needed to specify the obligatory features for its part of speech (POS). A stem can be non-templatic or it can be composed from the interdigitation of a root and a pattern. The pattern may specify the features fully, as in broken plurals. Base words are as such the smallest fully formed words. Examples include: كتابين 'two books' and يكتبون 'they write'. Clitics are syntactically independent but phonologically dependent morphemes that are attached to the word phonologically. Words can be base words or base words with added clitics. We use the term word to refer to the phonological utterance or the orthographic string, and we specify as needed. In CODA, phonological words typically map one-to-one to orthographic words; but there are many exceptions, pertaining mostly to clitics that are spelled as separate orthographic words.


{% include 'html/words_basewords_clitics1.html' %}

***

??? optional-class "Click to see another example"
    {% include 'html/words_basewords_clitics2.html' %}

<br>




### General

### Basic Phonology to Orthography Mapping

#### Hamza Rules


Hamza (Glottal Stop) spelling follows from the same rules as those of MSA and is unchanged from previous CODA versions. 

(For a detailed explanation of Hamza spelling rules in MSA, you can refer to chapter 7 of the [QALB annotation guidelines](http://nlp.qatar.cmu.edu/qalb/QALB-guidelines_0.90.pdf))

***

Note on **base word initial Hamza**: In previous versions of CODA, and in MSA spelling, base word initial Hamza have complex spelling rules. The rule is now simplified to normalize and not spell base word initial Hamzas, though the option remains to considers the Hamzation (أ, إ) at the beginning of a word as optional

***

Note on **word initial Madda**: any word that starts with a long vowel of the quality /2 aa/ is spelled with a Madda آ

***

Note on **DA divergence from MSA cognates**: Hamza spelling matches the sound. In other words, dialectal words that have MSA cognates containing Hamza but do not contain an /2/ in their phonology are spelled without the Hamza.

<!-- ??? optional-class "{{ more }}" -->
| CODA                             | CAPHI                                           | Gloss                    | MSA Cognate     | Dialect | Examples; Comments                                                                                       | 
|----------------------------------|-------------------------------------------------|--------------------------|-----------------|-------------|----------------------------------------------------------------------------------------------------------| 
| <span dir="rtl">الف</span>       | <span class='caphi'>2 a l f</span>              | thousand                 | ألف             | Sanaa       | Base word initial Hamza is normalized (not written)                                                      | 
| <span dir="rtl">مألوف</span>     | <span class='caphi'>m a 2 l uu f</span>         | familiar                 | مألوف           | Sanaa       |                                                                                                          | 
| <span dir="rtl">لا مؤاخذة</span> | <span class='caphi'>l a # m u 2 a kh z a</span> | excuse me                | لا مؤاخذة       | Cairo       ||
| <span dir="rtl">فئة</span>       | <span class='caphi'>f i 2 e</span>              | denomination             | فئة             | Sanaa    |                                                                                                          | 
| <span dir="rtl">يأنتر</span>     | <span class='caphi'>y i 2 a n t i r</span>      | he is using the internet | يستعمل الإنترنت | Sanaa       |                                                                                                          | 
| <span dir="rtl">بريء</span>      | <span class='caphi'>b a r ii 2</span>           | innocent                 | بريء            | Sanaa       |                                                                                                          | 
| <span dir="rtl">بير</span>       | <span class='caphi'>b ii r</span>               | well                     | بئر             | Sanaa       | Spelling follows dialect phonology: Hamza is dropped                                                     | 
| <span dir="rtl">سما</span>       | <span class='caphi'>s a m e</span>              | sky                      | سماء            | Sanaa       | Hamza is dropped from dialect, but final vowel spelling maintains the Alif taking etymology into account | 
| <span dir="rtl">ما</span>        | <span class='caphi'>m aa</span>                 | water                    | ماء             | ِAlgiers    | Hamza is dropped from, but final vowel spelling maintains the Alif taking etymology into account         | 
| <span dir="rtl">آسف</span>       | <span class='caphi'>2 aa s i f</span>           | sorry                    | آسف             | Sanaa       | Madda rule                                                                                               | 
| <span dir="rtl">تأمين</span>     | <span class='caphi'>t e 2 m ii n</span>         | insurance                | تأمين           | Beirut      |                                                                                                          | 




<!-- 
#### General

##### Basic Phonology to Orthography Mapping -->

#### Diacritics


While Arabic diacritics are optional in general, they can be crucial for disambiguation in certain contexts. Arabic diacritics are primarily used for representing short vowels, or absence of vowels. However, the Shadda diacritic is used to represent consonantal gemination, e.g. كَتَّب /k a t t a b/ ‘he dictated’. As such, the Shadda interacts with the number of letters in a word. The Shadda general rule states that it is used within the base word (including suffixes and prefixes), but not across word-clitic boundaries. Any exceptions must be specified in the specific rules (see specific rule: "The Definite Article" for an example of where the general Shadda rule is overriden.

**Clarification (April 1, 2023, NYH):** The general Shadda rule is overriden in base-word-initial positions where a prefix or template consonant matches a root radical in form. In such cases, using a Sukun is prefered to preserve the morphological integrity of the word, e.g. مْمَلَّح /m m a l l a 7/ ‘salted’ (LEV) or نْنَشِّف /n n a sh sh e f/ ‘we dry’ (LEV).

| CODA                             | CAPHI                                             | Gloss                  | Tokenized CODA | Dialect | NON-CODA examples; Comments                                                                                  | 
|----------------------------------|---------------------------------------------------|------------------------|----------------|-------------|--------------------------------------------------------------------------------------------------------------| 
| <span dir="rtl">جنَّنَاهم</span> | <span class='caphi'>g a n n a n n aa h u m</span> | we made them crazy     | جنَّنَّا+هم       | Cairo       | Note that this نا  is an obligatory suffix referring <br> to the verbal feature [1p] and is part of the base word | 
| <span dir="rtl">جنَّنَنا</span>  | <span class='caphi'>g a n n a n n a</span>        | he/it mad us crazy     | جنَن+نا        | Cairo       |    جنّنّا                                                                                                          | 
| <span dir="rtl">يبارككم</span>   | <span class='caphi'>b aa r i k k u m</span>       | [he] congratulates you | يبارك+كم       | Cairo       |   يباركّم                                                                                                        | 
| <span dir="rtl">واحشيننا</span>  | <span class='caphi'>w aa 7 sh i n n a</span>      | we miss you            | واحشين+نا      | Cairo       |   واحشنّا                                                                                                           | 
| <span dir="rtl">مْمَلَّح</span>  | <span class='caphi'>m m a l l a 7</span>      | salted            | مْمَلَّح      | Jerusalem       |  مَّلَّح                                                                                                            |

<!-- #### General

##### Basic Phonology to Orthography Mapping -->

#### Long/Short Vowel Spelling

In many dialects, base word long vowels may be shortened in certain contexts. Generally, the rule is to prefer the long letter-based spelling over the shortened diacritic spelling.

| CODA                            | CAPHI                                     | Gloss         | MSA Cognate | Dialect | Examples; Comments                                                                                  | 
|---------------------------------|-------------------------------------------|---------------|-------------|-------------|-----------------------------------------------------------------------------------------------------| 
| <span dir='rtl'>قانون</span>    | <span class='caphi'>2 a n uu n</span>     | law           | قانون       | Cairo       | So long as the vowel is the same quality as <br> the MSA, we can keep the MSA spelling                   | 
| <span dir='rtl'>قولوا له</span> | <span class='caphi'>2 u l uu # l u</span> | tell him [2p] | قولوا له    | Cairo       | this is because قول is not always short in Cairene <br> and can be pronounced long in different contexts | 



<!-- #### General

##### Basic Phonology to Orthography Mapping -->

#### Root Radical Spelling

Dialectal word root radicals which have MSA cognates will be spelled using the MSA cognate radical if the dialectal radical sound and the MSA radical sounds are paired according to a specific set of common sound changes.

Our list of allowed pairings is presented in the table below:

| CODA | Dialectal Sound Variant(s) | MSA Sound | 
|------|----------------------------|-----------| 
| ت    | t., d, d.                  | t         | 
| ث    | t, t., s                   | th        | 
| ج    | j, tsh, gy, y              | dj, g     | 
| د    | t., d.                     | d         | 
| ذ    | d, dh., z                  | dh        | 
| ر    | gh                         | r         | 
| ز    | s, s.                      | z         | 
| س    | s., z                      | s         | 
| ش    | tsh                        | sh        | 
| ص    | s, z                       | s.        | 
| ض    | d, dh., z.                 | d.        | 
| ط    | t                          | t.        | 
| ظ    | d., z.                     | dh.       | 
| ق    | j, dz, dj, k, g, qh, 2     | q         | 
| ك    | ts, tsh, g                 | k         | 
| ن    | m                          | n         | 


***
    
  
  

| CODA                          | CAPHI                                       | Gloss           | Letter | Dialectal Sound | MSA Sound | Dialect  | NON-CODA examples; Comments                                                                                                                                                                                      | 
|-------------------------------|---------------------------------------------|-----------------|-------------|-----------------|-----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| <span dir='rtl'>برتقان</span> | <span class='caphi'>b u r t u 2 aa n</span> | orange          | ق           | 2               | q         | Cairo       | برتئان، برتقال; only the sound-letter pairs that <br> are in the list of permitted changes are changed                                                                                                                | 
| <span dir='rtl'>ثامن</span>   | <span class='caphi'>t aa m i n</span>       | eighth          | ث           | t               | th        | Jeddah       | تامن                                                                                                                                                                                                             | 
| <span dir='rtl'>فستان</span>  | <span class='caphi'>f u s t. aa n</span>    | dress           | ت           | t.              | t         | Amman        | فسطان، فصطان                                                                                                                                                                                                     | 
| <span dir='rtl'>ذيل</span>    | <span class='caphi'>d ee l</span>           | tail            | ذ           | d               | dh        | Beirut       | ديل                                                                                                                                                                                                              | 
| <span dir='rtl'>ضحك</span>    | <span class='caphi'>d i 7 i k</span>        | he laughed      | ض           | d               | d.        | Cairo        | دحك                                                                                                                                                                                                              |
| <span dir='rtl'>ضفدعة</span>  | <span class='caphi'>d. u f d. a 3 a</span>  | frog            | د           | d.              | d         | Cairo        | ضفضعة                                                                                                                                                                                                            | 
| <span dir='rtl'>ظهرية</span>  | <span class='caphi'>d. u h r i y y a</span> | shaddow         | ظ           | d.              | dh.       | Jeddah       | ضهرية                                                                                                                                                                                                            | 
| <span dir='rtl'>ذوق</span>    | <span class='caphi'>dh. oo g</span>         | tasting         | ذ           | dh.             | dh        | Baghdad      | ظوق                                                                                                                                                                                                              | 
| <span dir='rtl'>ضغط</span>    | <span class='caphi'>dh. a gh a t.</span>    | he pressed      | ض           | dh.             | d.        | Jerusalem    | ظغط                                                                                                                                                                                                              | 
| <span dir='rtl'>ثورة</span>   | <span class='caphi'>s a w r a</span>        | revolution      | ث           | s               | th        | Cairo        | سورة                                                                                                                                                                                                             | 
| <span dir='rtl'>الزعيم</span> | <span class='caphi'>2 a s s e 3 ii m</span> | the boss        | ز           | s               | z         | Sana’a       | السعيم                                                                                                                                                                                                           | 
| <span dir='rtl'>صايغ</span>   | <span class='caphi'>s aa y e gh</span>      | jeweler         | ص           | s               | s.        | Cairo        | سايغ                                                                                                                                                                                                             | 
| <span dir='rtl'>سلطة</span>   | <span class='caphi'>s. a l. a t. a</span>   | salad           | س           | s.              | s         | Khartoum     | صلطة                                                                                                                                                                                                             | 
| <span dir='rtl'>ذبيحة</span>  | <span class='caphi'>z a b ii 7 a</span>     | meat            | ذ           | z               | dh        | Muscat       | زبيحة                                                                                                                                                                                                            | 
| <span dir='rtl'>اسبوع</span>  | <span class='caphi'>2 i z b uu 3</span>     | week            | س           | z               | s         | Khartoum     | ازبوع                                                                                                                                                                                                            | 
| <span dir='rtl'>صغير</span>   | <span class='caphi'>z gh ii r</span>        | small           | ص           | z               | s.        | Beirut       | زغير                                                                                                                                                                                                             | 
| <span dir='rtl'>مضبوط</span>  | <span class='caphi'>m a z. b uu t.</span>   | correct         | ض           | z.              | d.        | Jeddah       | مزبوط                                                                                                                                                                                                            | 
| <span dir='rtl'>عظيم</span>   | <span class='caphi'>3 a z. ii m</span>      | great           | ظ           | z.              | dh.       | Damascus     | عزيم                                                                                                                                                                                                             | 
| <span dir='rtl'>طريق</span>   | <span class='caphi'>t. a r ii j</span>      | road            | ق           | j               | q         | Baghdad      | طريج                                                                                                                                                                                                             | 
| <span dir='rtl'>سمك</span>    | <span class='caphi'>s i m a ts</span>       | fish            | ك           | ts              | k         | Riyadh(B)    | سمتس                                                                                                                                                                                                             | 
| <span dir='rtl'>كتابج</span>  | <span class='caphi'>k i t aa b i ts</span>  | your [2fs] book | ج           | ts              | dj, g     | Riyadh(B)    | كتابتس، كتابك; Remember that root radicals only <br> apply to the root of the base word, and that <br> clitics such as the possessive pronoun ج+ <br> may have their own rules (see specification tables)                       | 
| <span dir='rtl'>جزاير</span>  | <span class='caphi'>dz aa y i r</span>      | Algeria         | ج           | dz              | dj, g     | Algiers      | دزاير                                                                                                                                                                                                            | 
| <span dir='rtl'>طريق</span>   | <span class='caphi'>t. a r ii dz</span>     | road            | ق           | dz              | q         | Riyadh(B)      | طريدز                                                                                                                                                                                                            | 
| <span dir='rtl'>عيونج</span>  | <span class='caphi'>3 y uu n i tsh</span>   | your eyes [2fs] | ج           | tsh             | dj, g     | Doha         | عيونش، عيونتس; Remember that root radicals only <br> apply to the root of the base word, and that <br> clitics such as the possessive pronoun ج+ <br> may have their own rules (see specification tables)                       | 
| <span dir='rtl'>شاف</span>    | <span class='caphi'>tsh aa f</span>         | he saw          | ش           | tsh             | sh        | Doha         | تشاف                                                                                                                                                                                                             | 
| <span dir='rtl'>سمك</span>    | <span class='caphi'>s i m a tsh</span>      | fish            | ك           | tsh             | k         | Basra    | سمج، سمتش                                                                                                                                                                                                        | 
| <span dir='rtl'>طريق</span>   | <span class='caphi'>t. i r ii dj</span>     | road            | ق           | dj              | q         | Abu Dhabi      | طريج                                                                                                                                                                                                             | 
| <span dir='rtl'>رقم</span>    | <span class='caphi'>r a k a m</span>        | number          | ق           | k               | q         | Jerusalem(R) | ركم                                                                                                                                                                                                              | 
| <span dir='rtl'>قال</span>    | <span class='caphi'>g aa l</span>           | he said         | ق           | g               | q         | Aswan        | جال، كال                                                                                                                                                                                                         | 
| <span dir='rtl'>بنك</span>    | <span class='caphi'>b. a n g</span>         | bank            | ك           | g               | k         | Baghdad      | بنج، بنق                                                                                                                                                                                                         | 
| <span dir='rtl'>رقم</span>    | <span class='caphi'>r a qh a m</span>       | number          | ق           | qh              | q         | Khartoum | رغم، رجم                                                                                                                                                                                                         | 
| <span dir='rtl'>غسالة</span>  | <span class='caphi'>kh a s s ee l a</span>  | washer          | غ           | kh              | gh        | Tunis        | خسالة; while there is no /kh/ to غ mapping in the <br> root radical cognate table, this switch is allowed <br> in this particualr case because Tunisian use <br> of /kh a s s ee l a/ and /gh a s s ee l a/ is in free variance | 
| <span dir='rtl'>اريد</span>   | <span class='caphi'>2 a gh ii d</span>      | I want          | ر           | gh              | r         | Mosul        | اغيد                                                                                                                                                                                                             | 
| <span dir='rtl'>طريق</span>   | <span class='caphi'>t. a r ii 2</span>      | road            | ق           | 2               | q         | Damascus      | طريء                                                                                                                                                                                                             | 
| <span dir='rtl'>جنب</span>    | <span class='caphi'>j a m b</span>          | besides         | ن           | m               | n         | Jeddah       | جمب                                                                                                                                                                                                              | 
| <span dir='rtl'>جلس</span>    | <span class='caphi'>y a l a s</span>        | he sat down     | ج           | y               | dj, g     | Abu Dhabi    | يلس                                                                                                                                                                                                              | 




  </details>




<!-- #### General

##### Base Word Spelling -->

#### Pattern Spelling


Dialectal words with patterns that are cognates of MSA patterns will retain the spelling choice of the MSA pattern if the difference in pronunciation can be expressed using diacritics (for vowel change or vowel absence), or if the pronunciation is a shortened form of the MSA pattern vowels.

Elongated vowels and initial vowels in otherwise cognate MSA patterns will be spelled using the general rules, e.g اتدشدش below. 

Consonants in the underlying pattern are generally preserved in the final form of the word regardless of any phonetic interactions.  The only exception to this rule are MSA patterns whose form changes in the standard MSA spelling, such as افتعل -- for example: ازدهر، اضطرب.

<!-- TODO: add additional examples -->

| CODA               | CAPHI                               | Gloss          | Pattern | Dialect | NON-CODA examples; Comments | 
|-------------------------------|------------------------------------------------|----------------|-------------|-----------------|-----------|
| <span dir='rtl'>اتضرب</span>  | <span class='caphi'>2 i d. d. a r a b</span>   | he got hit     | اتفعل           | Cairo       | ادضرب، اضّرب            | 
| <span dir='rtl'>اتدشدش</span> | <span class='caphi'>2 i d d a sh d a sh</span> | he got smashed | اتفعلل          | Cairo       | ادّشدش                  |
| <span dir='rtl'>انضرب</span>  | <span class='caphi'>n d. a r a b</span>        | he got hit     | انفعل           | Amman       | نضرب                   |




<!-- #### General

##### Base Word Spelling -->

#### Alif Maqsura

The MSA rules for spelling the Alif-Maqsura (ى), which are sometimes based on roots and sometimes on patterns, apply in CODA*.

| CODA                        | CAPHI                                 | Gloss      | Dialect | NON-CODA examples; Comments | 
|-----------------------------|---------------------------------------|------------|-------------|-----------------------------| 
| <span dir='rtl'>اعطى</span> | <span class='caphi'>2 a 3 t. a</span> | give [3ms] | Abu Dhabi   | اعطا                        | 
| <span dir='rtl'>بغى</span>  | <span class='caphi'>b gh a</span>     | want [3ms] | Rabat       | بغا                         | 
| <span dir='rtl'>حكى</span>  | <span class='caphi'>7 a k e</span>    | chat [3ms] | Beirut      | حكي                         | 





<!-- #### General

##### Base Word Spelling -->

#### Clitic Spelling

The general rule on phonological clitic spelling is that clitics that are mapped into single letters (with possible diacritics) will be spelled attached to the word, and will not interact with the spelling of the word. (For examples of specifc rules that override this rule, see "The Definite Article" and "Nominative Pronouns")

| CODA                               | CAPHI                                                     | Gloss                 | Tokenized CODA | Dialect | Comments                                                                                       | 
|------------------------------------|-----------------------------------------------------------|-----------------------|----------------|-------------|------------------------------------------------------------------------------------------------| 
| <span dir='rtl'>ولحد ما يجي</span> | <span class='caphi'>w l a 7 a d d #</span> <span class='caphi'> m a # y ii g i</span> | and until he/it comes | و+ل+حد ما يجي  | Cairo       | notice how و and ل (single letter clitics) attach <br> to adjacent morphemes while ما does not. | 





## Specific Rules

### The Definite Article


The Arabic definite article is always written as a proclitic ال+ـ, regardless of how it is pronounced (keep in mind that in DA, lunar/solar letters are not always the same as in MSA). As with MSA spelling, general cliticization rules apply except when following the proclitic ل+ـ, where the article is spelled without its ا. The general Shadda rule is overridden in the specific context of ل+ ال+ـ followed by an ل-initial base word.


| CODA                           | CAPHI                                        | Gloss             | Tokenized CODA | Dialect | Examples; Comments                                                                                             | 
|--------------------------------|----------------------------------------------|-------------------|----------------|-------------|----------------------------------------------------------------------------------------------------------------| 
| <span dir='rtl'>القمر</span>   | <span class='caphi'>2 i l 2 a m a r</span>   | the moon          | ال+قمر         | Cairo       |                                                                                                                | 
| <span dir='rtl'>الشمس</span>   | <span class='caphi'>2 i sh sh a m e s</span> | the sun           | ال+شمس         | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>الكتاب</span>  | <span class='caphi'>2 i k k i t aa b</span>  | the book          | ال+كتاب        | Cairo       | Note how Cairene sometimes treats /k/ as a solar letter                                                        | 
| <span dir='rtl'>البيت</span>   | <span class='caphi'>l b ee t</span>          | the house         | ال+بيت         | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>البيوت</span>  | <span class='caphi'>l e b y uu t</span>      | the houses        | ال+بيوت        | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>بالبيت</span>  | <span class='caphi'>b e l b ee t</span>      | at home           | ب+ال+بيت       | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>بالبيوت</span> | <span class='caphi'>b l e b y uu t</span>    | at the houses     | ب+ال+بيوت      | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>للبيت</span>   | <span class='caphi'>l a l b ee t</span>      | for the house     | ل+ال+بيت       | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>للبيوت</span>  | <span class='caphi'>l a l e b y uu t</span>  | for the houses    | ل+ال+بيوت      | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>للشمس</span>   | <span class='caphi'>l a sh sh a m e s</span> | to the sun        | ل+ال+شمس       | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>للشموس</span>  | <span class='caphi'>l a l e sh m uu s</span> | to the suns       | ل+ال+شومس      | Jerusalem   |                                                                                                                | 
| <span dir='rtl'>اللجنة</span>  | <span class='caphi'>2 e l l a g n a</span>   | the committee     | ال+لجنة        | Cairo       |                                                                                                                | 
| <span dir='rtl'>للجنة</span>   | <span class='caphi'>l e l l a g n a</span>   | for the committee | ل+ال+لجنة      | Cairo       | Note how it is not spelled لللجنة and the general shadda rules are <br> overriden (see general "Diacritics" rules). | 





<!-- ## Specific Rules -->

### The Ta-Marbuta


The Ta-Marbuta (ة) is a secondary letter of the Arabic alphabet used to represent a particular suffix morpheme that is often (but not exclusively) associated with the feminine-singular feature (Alkuhlani and Habash, 2011). This morpheme has a number of allomorphs with differing pronunciations. Most notably, it appears as a vowel at the end of nominals, and changes to a ∼ /t/ when followed by possessive pronominal enclitics. The Ta-Marbuta should be written as ة in word-final positions, regardless of its pronunciation, and following general CODA rules in non-word-final positions.

| CODA                               | CAPHI                                                    | Gloss               | Dialect | 
|------------------------------------|----------------------------------------------------------|---------------------|-------------| 
| <span dir='rtl'>حاجة</span>        | <span class='caphi'>7 aa g a</span>                      | something           | Cairo       | 
| <span dir='rtl'>حاجتي</span>       | <span class='caphi'>7 aa g t i </span>                   | my thing            | Cairo       | 
| <span dir='rtl'>حاجتها</span>      | <span class='caphi'>7 aa g i t h a</span>                | her thing           | Cairo       | 
| <span dir='rtl'>طاولة</span>       | <span class='caphi'>t. aa w l e</span>                   | table               | Jerusalem   | 
| <span dir='rtl'>غزالة</span>       | <span class='caphi'>gh a z ee l i</span>                 | gazelle             | Beirut      | 
| <span dir='rtl'>معلمة مدرسة</span> | <span class='caphi'>m 3 a l m i t # m a d r a s e</span> | school teacher      | Jerusalem   | 
| <span dir='rtl'>معلمة مدرسة</span> | <span class='caphi'>m 3 a l m e # m a d r a s e</span>   | she taught a school | Jerusalem   | 
| <span dir='rtl'>معلمتهم</span>     | <span class='caphi'>m 3 a l m i t h u m</span>           | their teacher       | Jerusalem   | 
| <span dir='rtl'>معلماهم</span>     | <span class='caphi'>m 3 a l m aa h u m</span>            | she taught them     | Jerusalem   | 




<!-- #### Specific Rules -->

### The Plural Waw


Verbal suffixes that indicate the feature plural subject [2p] & [3p] and end with the sounds (/u/, /uu/, /o/, /oo/, and /aw/) will represent those sounds as وا+ (‘Waw of Plurality’ واو الجماعة) in word-final positions, and also when followed by other attached clitics. This rule is similar to the MSA rule, except for expanding the phonetic definition.

| CODA                            | CAPHI                                        | Gloss            | Dialect | 
|---------------------------------|----------------------------------------------|------------------|-------------| 
| <span dir='rtl'>قالوا</span>    | <span class='caphi'>2 aa l u</span>          | they said        | Cairo       | 
| <span dir='rtl'>بيقولوا</span>  | <span class='caphi'>b i y 2 uu l u</span>    | they say         | Cairo       | 
| <span dir='rtl'>نقولوا</span>   | <span class='caphi'>n q uu l u</span>        | we say           | Tunis       | 
| <span dir='rtl'>قالوا</span>    | <span class='caphi'>g aa l a w</span>        | they said        | Abu Dhabi   | 
| <span dir='rtl'>قالوها</span>   | <span class='caphi'>2 a l uu h a</span>      | they said it     | Cairo       | 
| <span dir='rtl'>ما قالوش</span> | <span class='caphi'>m a # 2 a l uu sh</span> | they did not say | Cairo       | 
| <span dir='rtl'>قالوا له</span> | <span class='caphi'>2 a l uu # l u</span>    | they said to him | Cairo       | 





 

<!-- #### Specific Rules -->

### Negation Clitics

The negation particle (/m a/, /m aa/) has phonologically become a proclitic in many dialects. However, it is always written as a separate particle ما except when overridden by other specification rules. One example of such a rule is the case of negated pronouns (see "Nominative Pronouns"), in which ما is written attached. Another example involves some negated existentials (see "Existentials") in which the Alif can be ellided.


| CODA                            | CAPHI                                            | Gloss          | Dialect | 
|---------------------------------|--------------------------------------------------|----------------|-------------| 
| <span dir='rtl'>ما قال</span>   | <span class='caphi'>m aa # 2 aa l</span>         | he did not say | Damascus    | 
| <span dir='rtl'>ما قالش</span>  | <span class='caphi'>m a # 2 a l sh</span>        | he did not say | Cairo       | 
| <span dir='rtl'>ما بدناش</span> | <span class='caphi'>m a # b i d d n aa sh</span> | we do not want | Amman       | 
| <span dir='rtl'>مانيش</span>    | <span class='caphi'>m a n ii sh</span>           | I am not       | Cairo       | 
| <span dir='rtl'>ماهياش</span>   | <span class='caphi'>m a h i y y aa sh</span>     | she is not     | Cairo       | 





<!-- #### Specific Rules -->

### Prepositional Enclitics


Post-verbal and post-nominal prepositions that have phonologically become enclitics will nonetheless be spelled separately from the words they follow. The most prominent such case is the preposition ل+ـ ‘to, for’ which introduces indirect verb objects in a number of dialects.


| CODA                                | CAPHI                                              | Gloss                     | Dialect | 
|-------------------------------------|----------------------------------------------------|---------------------------|-------------| 
| <span dir='rtl'>قالوها لي</span>    | <span class='caphi'>2 a l u h aa # l i</span>      | they said it to me        | Cairo       | 
| <span dir='rtl'>ما قالوا ليش</span> | <span class='caphi'>m a # 2 a l u # l ii sh</span> | they did not say it to me | Cairo       | 
| <span dir='rtl'>بالنسبة له</span>   | <span class='caphi'>b i n n i s b aa # l u</span>  | as for him                | Cairo       | 





<!-- #### Specific Rules -->

### Numbers

The words for numbers in Arabic dialects are amongst the most rich in phonological variety. The rules of writing number words in CODA* add the following exceptions to the general rules:

* The sometimes reduced historical Ta-Marbuta in the middle of the teens (11-19) is always written as ت regardless of its pronunciation as /t/ or /t./. It is never reduced to a Shadda diacritic.
* The sometimes reduced historical /3/ ع in numbers such as عشر ‘ten, -teen’, and تسع ‘nine’ will always be spelled as ع even if completely elided or turned into a vowel.
* The sometimes reduced or altered final letter of عشر ‘ten, -teen’ will be written as pronounced. The variation in this form marks different syntactic construction in some dialects.
* The hundreds will be written as a single word only if the hundred part is singular in form.
* The remnant /t/ of the historical Ta-Marbuta appearing only before Alif-initial words after number words will not be written.
* In complex number conjunctions such as خمسة وخمسين 'fifty-five (lit. five and fifty)', the vowel at the end of the first number is sometimes elided or assimiliated with the conjuction و /w/ or /u/ thus making the form hard to determine.  We assume by default that it is the same as the non-Idafa construction form in that particular dialect.  

The above rules apply to all number words, whether ordinal, cardinal, or fractions. Number words sometimes have different masculine and feminine forms that are used according to different dialect-specific rules. CODA guidelines do not interact with these dialect-specific decisions.

In the below table the gloss of number words used in Idafa construction will have an X marking the position of the noun that follows the number.


| CODA                             | CAPHI                                                | Gloss        | Dialect     | 
|----------------------------------|------------------------------------------------------|--------------|-------------| 
| <span dir='rtl'>ثمانية</span>    | <span class='caphi'>th a m a n y e</span>            | eight        | Salt        | 
| <span dir='rtl'>ثمانية</span>    | <span class='caphi'>t a m a n y e</span>             | eight        | Amman       | 
| <span dir='rtl'>ثمانة</span>     | <span class='caphi'>t a m aa n e</span>              | eight        | Damascus    | 
| <span dir='rtl'>ثمان</span>      | <span class='caphi'>t a m a n</span>                 | eight X      | Amman       | 
| <span dir='rtl'>ثمان</span>      | <span class='caphi'>t m aa n</span>                  | eight X      | Damascus    | 
| <span dir='rtl'>ثمانتعش</span>   | <span class='caphi'>t a m a n t a 3 sh</span>        | eighteen     | Amman       | 
| <span dir='rtl'>ثمانتعش</span>   | <span class='caphi'>t m a n t a 3 sh</span>          | eighteen     | Damascus    | 
| <span dir='rtl'>ثمنتعش</span>    | <span class='caphi'>th m u n t. a 3 i sh</span>      | eighteen     | Baghdad     | 
| <span dir='rtl'>ثمانتعشر</span>  | <span class='caphi'>t a m a n t aa sh a r</span>     | eighteen     | Cairo       | 
| <span dir='rtl'>ثمانتعشر</span>  | <span class='caphi'>t a m a n t a 3 sh a r</span>    | eighteen X   | Amman       | 
| <span dir='rtl'>ثمانتعشن</span>  | <span class='caphi'>th m a n t. aa sh e n</span>     | eighteen X   | Tunis       | 
| <span dir='rtl'>اربعمية</span>   | <span class='caphi'>2 a r b a 3 m i y y e</span>     | 400          | Amman       | 
| <span dir='rtl'>اربعمية</span>   | <span class='caphi'>2 a r b a 3 m ii t</span>        | 400 X        | Amman       | 
| <span dir='rtl'>ربعمية</span>    | <span class='caphi'>r u b 3 u m i y y a</span>       | 400          | Cairo       | 
| <span dir='rtl'>اربع الاف</span>  | <span class='caphi'>2 a r b a 3 # t a l aa f</span>  | 4,000        | Cairo       | 
| <span dir='rtl'>خمس ارباع</span> | <span class='caphi'>kh a m a s # t i r b aa 3</span> | five-fourths | Cairo       |
| <span dir='rtl'>خمس ايام</span>  | <span class='caphi'>kh a m a s # t i y y aa m</span> | five days    | Amman       | 





<!-- #### Specific Rules -->

### Pronominal Enclitics


The set of specifications for the pronominal clitics which can serve as possessive pronouns. Some of the decisions follow from the general rules, but for the most part they are intended to normalize the spelling as close as possible to the MSA variety without adding unnecessary and unresolvable ambiguity (e.g., using diacritics). It is important to point out again that this list is not dialect specific, but rather, it lists all the phonological forms of the pronominal morphemes in all dialects. The CODA* spelling for a dialect will depend on the phonology-morphology pair it corresponds to. Some of these pronouns have a large number of variants that can be ambiguous cross-dialectally. An interesting example is the case of the morpheme pronunciation /a/ which can be 3rd masculine singular in Gulf Arabic, but 3rd feminine singular in North Levantine: /k t aa b + a/ can correspond to كتاب+ه ‘his book’ (Abu Dhabi) or to كتاب+ها ‘her book’ (Damascus). The CODA* specification does not address how a particular dialect may organize the use of the different forms in terms of morphotactics, e.g., the possessive 2nd person singular feminine pronominal clitic is always ك+ in Tunis, and always كي+ in Mosul; however, in Amman, it is كي+ post-vocalically, and ك+ otherwise. The underspecification of some features is intentional as some pronominal clitics may be used with different associated genders in different dialects, e.g. كن+ is 2nd person plural feminine in Doha, but its is gender ambiguous in Beirut.

*** 

Here is the specification table for Pronominal Clitics:

| CODA | CAPHI                                                                        | Morpheme Features             | 
|------|------------------------------------------------------------------------------|-------------------------------| 
| ني   | <span class='caphi'>/n i/, /n e/, /n ii/, /n ee/</span>                      | 1st Person Singular           | 
| ي    | <span class='caphi'>/i/, /ii/, /e/, /ee/, /y/, /y a/, /y e/</span>           | 1st Person Singular           | 
| ك    | <span class='caphi'>/k/, /i k/, /e k/, /k a/</span>                          | 2nd Person Singular           | 
| كي   | <span class='caphi'>/k i/, /k e/, /k ii/, /k ee/</span>                      | 2nd Person Singular Feminine  | 
| ج    | <span class='caphi'>/tsh/, /i tsh/, /ts/, /i ts/</span>                      | 2nd Person Singular Feminine  | 
| ه    | <span class='caphi'>/h/, /h u/, /u/, /o/, /a/, /a h/, /u h/, [length]</span> | 3rd Person Singular Masculine | 
| ها   | <span class='caphi'>/h a/, /h aa/, /a/, /aa/, /h e/, /h ee/</span>           | 3rd Person Singular Feminine  | 
| نا   | <span class='caphi'>/n a/, /n aa/, /n e/, /n ee/</span>                      | 1st Person Plural             | 
| كم   | <span class='caphi'>/k u m/, /k o m/</span>                                  | 2nd Person Plural             | 
| كن   | <span class='caphi'>/k u n/, /k o n/, /tsh i n/</span>                       | 2nd Person Plural             | 
| هم   | <span class='caphi'>/h u m/, /h o m/, /u m/, /o m/</span>                    | 3rd Person Plural             | 
| هن   | <span class='caphi'>/h u n/, /h o n/, /u n/, /o n/</span>                    | 3rd Person Plural             | 



*** 

| CODA                          | CAPHI                                   | Gloss    | Dialect | 
|-------------------------------|-----------------------------------------|----------|-------------| 
| <span dir='rtl'>كتابها</span> | <span class='caphi'>k i t aa b a</span> | her book | Damascus    | 
| <span dir='rtl'>كتابه</span>  | <span class='caphi'>k i t aa b a</span> | his book | Abu Dhabi   | 






<!-- #### Specific Rules -->

### Nominative Pronouns

Nominative Pronouns are spelled as pronounced using general phonolgical rules, except for the final vowels, which are spelled in two different ways:

* (a) as diacritical forms if (i) the vowel is short and (ii) the spelling of the undiacritized base word exactly matches the MSA form for هو، هي، هم، هن and انتَ [masculine singular].
* Else (b) as letter form (ا، و، ي) regardless of their length: احنا or انتو or انتي.


**Decision notes**

* The pronoun انتي - as in /2 i n t i/, ‘you [fs]’ is spelled with the final “ي” always.  We acknoweldge that this makes it marked compared to MSA, but the decision reflects its very common usage in dialectal Arabic - and allows us to distinguish it from the undiacratized form of انت.   
* The pronoun نحنا - as in /n i 7 n a/, ‘we’ is spelled with a final “ا” and not as نِحْنَ because the MSA form is perceived to be highly associated with the final vowel /u/ as in /n a 7 n u/.
* The rule treats هو، هي، هم، هن exceptionally because adding additional letters used for vowel marking (ا،و،ي،ه) can cause added ambiguity: هوا، هما،هيا
* The Lebanese Arabic /h u w w i/, ‘he’ is spelled as هُوِّ as the final vowel /i/ is a short vowel and as such it follows from Rule Part (a).
* Negated pronouns may become a single word when negated using a circumfix negation, e.g. /m a n ii sh/ “مانيش”.
* Multiples of Alif: In the cases of negation particles ending with “ا” attaching to pronouns starting with “ا”, only one “ا” should remain, e.g. /m a 7 n aa sh/ → ماحناش → ما+احنا+ش.
 


| CODA                        | CAPHI                                | Gloss     | Dialect | 
|-----------------------------|--------------------------------------|-----------|-------------| 
| <span dir='rtl'>احنا</span> | <span class='caphi'>2 i 7 n a</span> | we        | Cairo       | 
| <span dir='rtl'>انا</span>  | <span class='caphi'>2 a n a</span>   | I         | Cairo       | 
| <span dir='rtl'>انت</span>  | <span class='caphi'>2 i n t a</span> | you [2m]  | Cairo       |
| <span dir='rtl'>انت</span>  | <span class='caphi'>n t a</span> | you [2m]  | Rabat       |
| <span dir='rtl'>انتو</span> | <span class='caphi'>2 i n t u</span> | you [2p]  | Cairo       |
| <span dir='rtl'>انتوما</span> | <span class='caphi'>n t uu m a</span> | you [2p]  | Tunis       |
| <span dir='rtl'>انتي</span> | <span class='caphi'>2 i n t i</span> | you [2fs] | Cairo       |
| <span dir='rtl'>انتي</span> | <span class='caphi'>n t i</span> | you [2fs] | Rabat       |
| <span dir='rtl'>اني</span>  | <span class='caphi'>2 a n i</span>   | I         | Tripoli     | 
| <span dir='rtl'>نحنا</span> | <span class='caphi'>n i 7 n a</span> | we        | Cairo       | 
| <span dir='rtl'>هم</span>   | <span class='caphi'>h u m m a</span> | they      | Cairo       | 
| <span dir='rtl'>هو</span>   | <span class='caphi'>h u w w a</span> | he, it    | Cairo       | 
| <span dir='rtl'>هي</span>   | <span class='caphi'>h i y y a</span> | she, it   | Cairo       | 



***

| CODA                          | CAPHI                                        | Gloss                 | Tokenized CODA | Dialect | 
|-------------------------------|----------------------------------------------|-----------------------|----------------|-------------| 
| <span dir='rtl'>ماحناش</span> | <span class='caphi'>m a 7 n aa sh</span>     | we are not            | ما+احنا+ش      | Cairo       | 
| <span dir='rtl'>مانتاش</span> | <span class='caphi'>m a n t aa sh</span>     | you are not           | ما+انت+ش       | Cairo       | 
| <span dir='rtl'>مانتوش</span> | <span class='caphi'>m a n t uu sh</span>     | you are not           | ما+انتو+ش      | Cairo       | 
| <span dir='rtl'>مانتيش</span> | <span class='caphi'>m a n t ii sh</span>     | you are not           | ما+انتي+ش      | Cairo       | 
| <span dir='rtl'>مانيش</span>  | <span class='caphi'>m a n ii sh</span>       | I am not              | ما+اني+ش       | Cairo       | 
| <span dir='rtl'>ماهماش</span> | <span class='caphi'>m a h u m m aa sh</span> | they are not          | ما+هم+ش        | Cairo       | 
| <span dir='rtl'>ماهواش</span> | <span class='caphi'>m a h u w w aa sh</span> | he is not, it is not  | ما+هو+ش        | Cairo       | 
| <span dir='rtl'>ماهياش</span> | <span class='caphi'>m a h i y y aa sh</span> | she is not, it is not | ما+هي+ش        | Cairo       | 





<!-- #### Specific Rules -->

### Vocative Familial Expressions

Some of the vocative expressions used primarily for familial reference have vocalic endings that are homophonous with pronominal suffixes. These endings are spelled following the general phonology-to-orthography rules. For example, the word /3 a m m o/ in the dialect of Amman can mean ‘uncle!’ (spelled in CODA as عمو) or ‘his uncle’ (spelled in CODA as عمه).

| CODA                       | CAPHI                                | Gloss     | Dialect | 
|----------------------------|--------------------------------------|-----------|-------------| 
| <span dir='rtl'>عمو</span> | <span class='caphi'>3 a m m o</span> | uncle!    | Amman       | 
| <span dir='rtl'>عمه</span> | <span class='caphi'>3 a m m o</span> | his uncle | Amman       | 





<!-- #### Specific Rules -->

### Relative Pronouns

Some forms containing relative pronouns can have different spelling rules, primarily to disambiguate differences in meaning.

| CODA                           | CAPHI                                | Gloss            | Dialect                                                                | Examples; Comments                                                                                                                                               | 
|--------------------------------|--------------------------------------|------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| <span dir='rtl'>اللي</span>    | <span class='caphi'>2 i l l i</span> | who, which, whom | Cairo | Follows general spelling rules                                                                                                                                   | 
| <span dir='rtl'>يا اللي</span> | <span class='caphi'>y a l l i</span> | O you who..      | Cairo | Following general rules, the vocative morpheme يا is spelled <br> separately connoting a vocative expression                                                          | 
| <span dir='rtl'>يا اللي</span> | <span class='caphi'>y e l l i</span> | O you who..      | Tunis                                                                      | Following general rules, the vocative morpheme يا is spelled <br> separately connoting a vocative <br> expression                                                          | 
| <span dir='rtl'>ياللي</span>   | <span class='caphi'>y a l l i</span> | who, which, whom | Beirut | هو ياللي اخترته; Note from the meaning how this is not a vocative <br> expression, and the يا is simply a part of the relative pronoun in <br> some dialects of the Levant | 
| <span dir='rtl'>لاللي</span>   | <span class='caphi'>l i l l i</span> | to whom..        | Riyadh | Following general cliticization rules, the ل prepositional clitic <br> attaches to the relative pronoun without changing its spelling                                 | 




<!-- #### Specific Rules -->

### Waqt/Sa3a forms


Some forms related to time, such as the Cairene /d i l w a 2 t i/, دلوقتي, 'now', are frozen forms which etymologically transform and combine various morphemes, in this case: هذا + الوقت. Instead of spelling it phonologically دلوئتي, we preserve etymological information by considering the nominal part of the word and spelling it according to general root radical cognate rules.

| CODA                          | CAPHI                                      | Gloss         | Dialect                        | 
|-------------------------------|--------------------------------------------|---------------|------------------------------------| 
| <span dir='rtl'>لسا</span>    | <span class='caphi'>l i s s a</span>       | not yet       | Abu Dhabi, Beirut                  | 
| <span dir='rtl'>هسا</span>    | <span class='caphi'>h a s s a</span>       | now, just now | Baghdad, Amman                     | 
| <span dir='rtl'>هسا</span>    | <span class='caphi'>h i s s e</span>       | now, just now | Baghdad                            | 
| <span dir='rtl'>هسعتا</span>  | <span class='caphi'>h a s s a 3 t a</span> | now, just now | Mosul                              | 
| <span dir='rtl'>هلقيت</span>  | <span class='caphi'>h a l 2 ee t</span>    | now, just now | Jerusalem                          | 
| <span dir='rtl'>هلقيت</span>  | <span class='caphi'>h a l k ee t</span>    | now, just now | Jerusalem(R)                       | 
| <span dir='rtl'>شوقت</span>   | <span class='caphi'>sh w a q i t</span>    | when          | Mosul                              | 
| <span dir='rtl'>شوقت</span>   | <span class='caphi'>sh w a k i t</span>    | when          | Baghdad                            | 
| <span dir='rtl'>وقتيش</span>  | <span class='caphi'>w a 2 t ee sh</span>   | when          | Jerusalem                          | 
| <span dir='rtl'>وقتيش</span>  | <span class='caphi'>w a k t ee sh</span>   | when          | Jerusalem                          | 
| <span dir='rtl'>ابساع</span>  | <span class='caphi'>2 i b s aa 3</span>    | quickly       | Baghdad                            | 
| <span dir='rtl'>دلوقتي</span> | <span class='caphi'>d i l w a 2 t i</span> | now, just now | Cairo                              | 
| <span dir='rtl'>فيسع</span>   | <span class='caphi'>f ii s a 3</span>      | quickly       | Tunis                              | 
| <span dir='rtl'>لسع</span>    | <span class='caphi'>l i s s a 3</span>     | not yet       | Jeddah                             | 
| <span dir='rtl'>هلق</span>    | <span class='caphi'>h a l l a 2</span>     | now, just now | Beirut, Jerusalem, Amman, Damascus | 
| <span dir='rtl'>فوقاش</span>  | <span class='caphi'>f uu q aa sh</span>    | when          | Rabat                              | 
| <span dir='rtl'>وقتاش</span>  | <span class='caphi'>w a q t aa sh</span>   | when          | Rabat                              | 
| <span dir='rtl'>وقتاش</span>  | <span class='caphi'>w a q t ee sh</span>   | when          | Tunis                              | 




<!-- #### Specific Rules -->

### Words with the name of God ‘Allah’

Nominative Pronouns are spelled as pronounced using general phonolgical rules, except for the final vowels, which are spelled in two different ways:

* Words containing the name of God ‘Allah’ will maintain its MSA spelling, i.e /b a l. l. a/, “بالله”
Decision notes:
* We make an exception for /y a l. l. a/ to accept both the etymological spelling “يالله” and the phonological spelling “يلا”.
  * It is observed that “يلا” is sometimes preferred over “يالله” to avoid using the name of God in contexts that might be considered indecent.
  * In some dialects such as Tunisian, “يلا” inflect as a verb in the command aspect, hence the spelling “يلا” is more appropriate.

| CODA                               | CAPHI                                                     | Gloss              | Dialect                     | 
|------------------------------------|-----------------------------------------------------------|--------------------|---------------------------------| 
| <span dir='rtl'>يلا</span>         | <span class='caphi'>y a l. l a</span>                     | hurry up, come on! | Abu Dhabi                       | 
| <span dir='rtl'>يلا</span>         | <span class='caphi'>y a l. l. a</span>                    | hurry up, come on! | Cairo                           | 
| <span dir='rtl'>يلا</span>         | <span class='caphi'>y a l l a</span>                      | hurry up, come on! | Rabat                           | 
| <span dir='rtl'>يالله</span>       | <span class='caphi'>y a l. l a</span>                     | hurry up, come on! | Abu Dhabi                       | 
| <span dir='rtl'>يالله</span>       | <span class='caphi'>y a l. l. a</span>                    | hurry up, come on! | Cairo                           | 
| <span dir='rtl'>يالله</span>       | <span class='caphi'>y a l l a</span>                      | hurry up, come on! | Beirut, Rabat                   | 
| <span dir='rtl'>ان شاء الله</span> | <span class='caphi'>2 i n # sh aa # l. l a</span>         | in God’s will      | Abu Dhabi                       | 
| <span dir='rtl'>ان شاء الله</span> | <span class='caphi'>2 i n # sh aa # l l a</span>          | in God’s will      | Beirut                          | 
| <span dir='rtl'>ان شاء الله</span> | <span class='caphi'>2 i n # sh aa 2 # a l. l. aa h</span> | in God’s will      | Cairo                           | 
| <span dir='rtl'>ان شاء الله</span> | <span class='caphi'>2 i n # sh a # l. l. a</span>         | in God’s will      | Cairo                           | 
| <span dir='rtl'>يا الله</span>     | <span class='caphi'>y a # 2 a l. l. a</span>              | oh God!            | Cairo, Abu Dhabi, Rabat, Beirut | 





<!-- #### Specific Rules -->

### Exestentials

1. The existential expression /f ii/, فيه, 'there is', is attached to the pronominal clitic [3ms] ه+, known in Arabic grammar as Dhameer Al Sha'n, ضمير الشأن, though its often not prounounced.
2. Another existential rule involves negated existentials, as in the Cairene /m a f ii sh/, مفيش, 'there isn't', in which the negation clitic is shortened and attached.

| CODA                       | CAPHI                            | Gloss    | Dialect | 
|----------------------------|----------------------------------|----------|-------------| 
| <span dir='rtl'>فيه</span> | <span class='caphi'>f ii</span>  | there is | Cairo       | 
| <span dir='rtl'>به</span>  | <span class='caphi'>b e h</span> | there is | Sanaa       | 



***

| CODA                        | CAPHI                                  | Gloss       | Tokenized CODA | Dialect | Examples; Comments                       | 
|-----------------------------|----------------------------------------|-------------|----------------|-------------|------------------------------------------| 
| <span dir='rtl'>مفيش</span> | <span class='caphi'>m a f ii sh</span> | there isn't | ما+في+ه+ش      | Cairo       |                                          | 
| <span dir='rtl'>مابش</span> | <span class='caphi'>m aa b i sh</span> | there isn't | ما+ب+ه+ش       | Sanaa       | Note how long vowels are never shortened | 



<!-- #### Specific Rules -->

### Demonstrative Pronouns

Demonstrative pronouns can be found in three forms:

* Simple pronouns: which is the demonstrative pronoun on its own, e.g.: /d oo l/, دول, 'these, those'
* Extended pronouns: which are extensions of the simple pronoun, e.g.: /h a d oo l/, هدول, 'these, those'
* Complex pronouns: which consist of a demonstrative pronoun and a personal pronoun attached together, e.g.: /h a h a w w a/, هاهو, 'there he is, there it is'
* If Simple, spell phonetically according to the general rules, with the following in mind:
  * Pronoun consonants that might have MSA cognate “ذ” such as EGY /d oo l/ will be spelled phonetically as “دول”. Emphatic variants of the cognate are not considered, such as LEV /h aa dh./ are spelled as the cognate “هاذ”.
  * Some pronouns might vary in vowel length only, in such case, long vowel variant is preferred.
* If extended, spell the extensions according to the general rules.
* If complex, determine the personal pronoun and spell it according to the rules in "Nominative Pronouns", spell the demonstrative pronoun part according to the simple pronoun rules.

| CODA                            | CAPHI                                         | Gloss                     | Dialect      | 
|---------------------------------|-----------------------------------------------|---------------------------|------------------| 
| <span dir='rtl'>اهو</span>      | <span class='caphi'>2 a h a w w a</span>      | there he is, there it is  | Tunis            | 
| <span dir='rtl'>اهو</span>      | <span class='caphi'>2 a h o</span>            | there he is, there it is  | Cairo            | 
| <span dir='rtl'>اهوكا</span>    | <span class='caphi'>2 a h a w k a</span>      | there he is (unseen)      | Tunis            | 
| <span dir='rtl'>اهوكم</span>    | <span class='caphi'>2 a h a w k u m</span>    | there they are (unseen)   | Tunis            | 
| <span dir='rtl'>اهوما</span>    | <span class='caphi'>2 a h a w m a</span>      | there they are            | Tunis            | 
| <span dir='rtl'>اهي</span>      | <span class='caphi'>2 a h a y y a</span>      | there she is, there it is | Tunis            | 
| <span dir='rtl'>اهي</span>      | <span class='caphi'>2 a h e</span>            | there she is, there it is | Cairo            | 
| <span dir='rtl'>اهيكا</span>    | <span class='caphi'>2 a h a y k a</span>      | there she is (unseen)     | Tunis            | 
| <span dir='rtl'>داك</span>      | <span class='caphi'>d aa k</span>             | that                      | Rabat            | 
| <span dir='rtl'>داك الشي</span> | <span class='caphi'>d aa k # i sh sh i</span> | that thing                | Rabat            | 
| <span dir='rtl'>ده</span>       | <span class='caphi'>d a h</span>              | this, that                | Cairo            | 
| <span dir='rtl'>دوك</span>      | <span class='caphi'>d uu k</span>             | those                     | Rabat            | 
| <span dir='rtl'>دوكهم</span>    | <span class='caphi'>d uu k h u m</span>       | these, those              | Cairo            | 
| <span dir='rtl'>دول</span>      | <span class='caphi'>d oo l</span>             | these, those              | Cairo            | 
| <span dir='rtl'>دول</span>      | <span class='caphi'>d uu l</span>             | these, those              | Cairo            | 
| <span dir='rtl'>دي</span>       | <span class='caphi'>d i</span>                | this, that                | Cairo            | 
| <span dir='rtl'>ديك</span>      | <span class='caphi'>d ii k</span>             | that                      | Rabat            | 
| <span dir='rtl'>ذاك</span>      | <span class='caphi'>dh aa k</span>            | that                      | Abu Dhabi        | 
| <span dir='rtl'>ذول</span>      | <span class='caphi'>dh oo l</span>            | these, those              | Abu Dhabi        | 
| <span dir='rtl'>ذي</span>       | <span class='caphi'>dh ii</span>              | this                      | Abu Dhabi, Rabat | 
| <span dir='rtl'>ذيلا</span>     | <span class='caphi'>dh ee l a</span>          | these, those              | Abu Dhabi        | 
| <span dir='rtl'>ذيلن</span>     | <span class='caphi'>dh ee l i n</span>        | these, those              | Abu Dhabi        | 
| <span dir='rtl'>راك</span>      | <span class='caphi'>r aa k</span>             | there you are             | Rabat            | 




<!-- #### Specific Rules -->

### ADVERBIAL, like this/that

1) Similar to demonstrative pronouns, this class of adverbials keeps general CODA rules, except for the "د" which is spelled as pronounced. Also note that "كده" was preferred with ه rather than ا (counter to general rules), because it appears much more frequently.


| CODA                         | CAPHI                                     | Gloss                | Dialect                | 
|------------------------------|-------------------------------------------|----------------------|----------------------------| 
| <span dir='rtl'>كي</span>    | <span class='caphi'>tsh ii y</span>       | like this, like that | Abu Dhabi                  | 
| <span dir='rtl'>كي</span>    | <span class='caphi'>tsh ii</span>         | like this, like that | Abu Dhabi                  | 
| <span dir='rtl'>كده</span>   | <span class='caphi'>k i d a</span>        | like this, like that | Cairo, Jedda, Khartoum     | 
| <span dir='rtl'>كده</span>   | <span class='caphi'>k e d a</span>        | like this, like that | Cairo                      | 
| <span dir='rtl'>كذي</span>   | <span class='caphi'>tsh i dh i</span>     | like this, like that | Abu Dhabi, Kwait, Manama   | 
| <span dir='rtl'>هكا</span>   | <span class='caphi'>h a k k a</span>      | like this, like that | Rabat, Tunis               | 
| <span dir='rtl'>هكاك</span>  | <span class='caphi'>h a k k aa k</span>   | like this, like that | Rabat                      | 
| <span dir='rtl'>هكايا</span> | <span class='caphi'>h e k k ee y a</span> | like this            | Tunis                      | 
| <span dir='rtl'>هكدا</span>  | <span class='caphi'>h a k d a</span>      | like this, like that | Rabat                      | 
| <span dir='rtl'>هكداك</span> | <span class='caphi'>h a k d aa k</span>   | like this, like that | Rabat                      | 
| <span dir='rtl'>هكيكا</span> | <span class='caphi'>h a k ee k a</span>   | like this, like that | Tunis                      | 
| <span dir='rtl'>هيك</span>   | <span class='caphi'>h a y k</span>        | like this, like that | Beirut                     | 
| <span dir='rtl'>كده</span>   | <span class='caphi'>k i d a</span>        | like this, like that | Cairo, Jedda, Khartoum     | 
| <span dir='rtl'>كذه</span>   | <span class='caphi'>k i dh a</span>       | like this, like that | Sanaa                      | 
| <span dir='rtl'>كذيه</span>  | <span class='caphi'>k i dh e y y e</span> | like this            | Sanaa                      | 
| <span dir='rtl'>هكي</span>   | <span class='caphi'>h i k i</span>        | like this, like that | Benghazi                   | 
| <span dir='rtl'>هكـي</span>  | <span class='caphi'>h i k k i</span>      | like this, like that | Mosul                      | 
| <span dir='rtl'>هيك</span>   | <span class='caphi'>h ii tsh</span>       | like this, like that | Baghdad                    | 
| <span dir='rtl'>هيك</span>   | <span class='caphi'>h ee k</span>         | like this, like that | Amman, Damascus, Jerusalem | 





## CODA* Seed Lexicon
A large and growing database containing verified examples of CODA* spelling for dialectal words, including affixes and clitics, is available here.

<iframe height="800" width="100%" src="https://datastudio.google.com/embed/reporting/9c0c420a-0ba2-440a-942e-b3e61cf6306d/page/jeFhB" frameborder="0" style="border:0" allowfullscreen></iframe>

## Publications and Resources About CODA

* Unified Guidelines and Resources for Arabic Dialect Orthography, 2018.[@Habash2018unified]
* A Conventional Orthography for Tunisian Arabic, 2014.[@Zribi2014conventional]
* A Conventional Orthography for Maghrebi Arabic, 2016.[@Turki2016conventional]
* Palestinian Arabic Conventional Orthography Guidelines, 2015.[@Habash2015palestinian]
* A Conventional Orthography for Algerian Arabic, 2015.[@Saadane2015conventional]
* Conventional Orthography for Dialectal Arabic, 2012.[@Habash2012conventional]
* Conventional Orthography for Dialectal Arabic (CODA) Version 0.1, 2011.[@Habash2011conventional]

## Publications and Resources Using CODA
* Noise-Robust Morphological Disambiguation for Dialectal Arabic, 2018.[@Zalmout2018noiserobust]
* Addressing Noise in Multidialectal Word Embeddings, 2018.[@Erdmann2018addressing]
* SUAR: Towards Building a Corpus for the Saudi Dialect, 2018.[@AlTwairesh2018suar]
* Joint Diacritization, Lemmatization, Normalization, and Fine-Grained Morphological Tagging, 2019.[@Zalmout2019joint]
* TArC: Incrementally and Semi-Automatically Collecting a Tunisian arabish Corpus, 2020.[@Gugliotta2020tarc]
* Targeted Topic Modeling for Levantine Arabic, 2020.[@Zahra2020targeted]
* Part-of-Speech Tagging for Arabic Tweets Using CRF and Bi-LSTM, 2020.[@Alkhwiter2020partofspeech]
* Morphological Tagging and Disambiguation in Dialectal Arabic Using Deep Learning Architectures, 2020.[@zalmout2020morphological]
* Transcription de Corpus Oraux d’Arabe Parlé en Interaction. Convention AraPI et Annexes, 2019.[@Choueiri2019transcription]
* Learn Palestinian Arabic, 2016.[@learnpalestinianarabic2016]


<!-- 
- Habash, Nizar, Fadhl Eryani, Salam Khalifa, Owen Rambow,† Dana Abdulrahim, Alexander Erdmann, Reem Faraj, Wajdi Zaghouani, Houda Bouamor, Nasser Zalmout, Sara Hassan, Faisal Al-Shargi, Sakhar Alkhereyf, Basma Abdulkareem, Ramy Eskander, Mohammad Salameh, Hind Saddiki. "Unified Guidelines and Resources for Arabic Dialect Orthography". LREC 2018. [PDF](http://www.lrec-conf.org/proceedings/lrec2018/pdf/395.pdf){:target="_blank"}
- Jarrar, Mustafa, Nizar Habash, Faeq Alrimawi, Diyam Akra and Nasser Zalmout. "Curras: an annotated corpus for the Palestinian Arabic dialect." Language Resources and Evaluation. 2017. [PDF](http://link.springer.com/article/10.1007/s10579-016-9370-7){:target="_blank"}
- Khalifa, Salam, Nizar Habash, Dana Abdulrahim and Sara Hassan. A Large Scale Corpus of Gulf Arabic.LREC.2016. [PDF](http://www.lrec-conf.org/proceedings/lrec2016/pdf/823_Paper.pdf){:target="_blank"}
- Saadane, Houda, and Nizar Habash. "A conventional orthography for Algerian Arabic." ANLP Workshop 2015. [PDF](http://www.aclweb.org/anthology/W15-3208){:target="_blank"}
- Zribi, Inès, et al. "A Conventional Orthography for Tunisian Arabic." LREC. 2014. [PDF](https://pdfs.semanticscholar.org/e855/1be410daf4525a26d87f3c867b6db6955076.pdf){:target="_blank"}
- Habash, Nizar, Mona T. Diab, and Owen Rambow. "Conventional Orthography for Dialectal Arabic." LREC. 2012. [PDF](http://www.lrec-conf.org/proceedings/lrec2012/pdf/579_Paper.pdf){:target="_blank"} -->



## Contributors

---
Project Lead
---
- Nizar Habash, New York University Abu Dhabi, UAE.

---
Current Maintainer
---
- Fadhl Eryani, New York University Abu Dhabi, UAE.

---
Team
---
- Dana Abdulrahim, University of Bahrain, Bahrain.
- Emad Adel, Sbikha 1979 High School, Tunisia.
- Diyam Akra, Birzeit University, Palestine.
- Faeq Alrimawi, Birzeit University, Palestine.
- Mahdi Arar, Birzeit University, Palestine.
- Eric Bartolotti.
- Lamia Belguith, Université de Sfax, Tunisia.
- Houda Bouamor, Carnegie Mellon University in Qatar.
- Rahma Boujelbane, Université de Sfax, Tunisia.
- Tariq Daouda, Université de Montréal, Canada.
- Mona Diab, George Washington University, USA.
- Mariem Ellouze, Université de Sfax, Tunisia.
- Alex Erdmann, New York University Abu Dhabi, UAE.
- Sara Hassan, New York University Abu Dhabi, UAE.
- Mustafa Jarrar, Birzeit University, Palestine.
- Salam Khalifa, New York University Abu Dhabi, UAE.
- Abir Masmoudi, Université de Sfax, Tunisia.
- Owen Rambow, Stony Brook University, USA.
- Nassim Regragui, Copenhagen Business School, Denmark.
- Houda Saadane, Université de Marne-la-Vallée, France.
- Houcemeddine Turki, Université de Sfax, Tunisia.
- Nasser Zalmout, New York University Abu Dhabi, UAE.
- Inès Zribi, Université de Sfax, Tunisia.

\bib

<!-- ### Archive
<iframe src="https://drive.google.com/embeddedfolderview?id=1jThn3evyILiLJIPZbMnzh5Bhz9eiVgNW#list" style="width:100%; height:600px; border:0;"></iframe> -->


<!-- ### Acknowledgments
* This work is supported by the Gulf Arabic Morphological Annotation project (New York University Abu Dhabi - research enhancement fund)
* This work is supported by the Multi-Arabic Dialect Applications and Resources (MADAR) project (grant NPRP 7-290-1-047 from the Qatar National Research Fund – a member of Qatar Foundation). -->
