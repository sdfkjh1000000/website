# Start here — Tank Talks

Source: https://tanktalks.sdfkjh.com/tools

Cycling the tank

## Safe ammonia levels

Your test kit gives you a number in mg/L. What you actually need to know: at your tank's pH and temperature, how much can your fish tolerate before chronic stress, and how much before acute toxicity? The EPA worked this out in 2013 — pH- and temperature-adjusted, fully documented — and almost no hobbyist has read it. Here's the table.

### The two thresholds

The criteria define two regulatory thresholds, both expressed as **Total Ammonia Nitrogen (TAN)** — the sum of un-ionized ammonia (NH3) and ammonium (NH4+), since aquarium test kits measure them together.

-   **Criterion Continuous Concentration (CCC)** — the 30-day average concentration that should not cause unacceptable chronic effects. This is the threshold for healthy long-term keeping.
-   **Criterion Maximum Concentration (CMC)** — the 1-hour average concentration that should not cause unacceptable acute effects (death within hours to days).

### Reference-point values (pH 7.0, 20°C)

At the EPA's reference conditions — pH 7.0 and 20°C (68°F), with freshwater mussels and fish early life stages present — the criteria are:

Criterion

Concentration (mg/L TAN)

Averaging period

**CCC (chronic)**

1.9

30-day rolling average

**CMC (acute)**

17

1-hour average

### At pH 7.0, across temperature

Temperature has a major effect — warmer water shifts more ammonia into the toxic un-ionized form and stresses invertebrates more. At pH 7.0, the criteria across temperature are:

Temperature

CMC (acute, mg/L TAN)

CCC (chronic, mg/L TAN)

0°C (32°F)

24

4.4

30°C (86°F)

7.3

0.99

The full pH × temperature lookup matrix (covering pH 6.5–9.0 and the same temperature range) is published as Tables 5a and 5b in the source document linked below. If your tank is at a pH other than 7.0, use those tables directly rather than interpolating — the relationship is non-linear and the EPA's published values are the authoritative form.

### Reading the criteria for aquarium use

Your liquid test kit reports TAN (the sum of NH3 and NH4+). Compare it to the CCC for your temperature:

-   **Below CCC** — safe for indefinite exposure.
-   **Between CCC and CMC** — stressful; trigger a water change immediately and address the cause.
-   **Above CMC** — emergency. Substantial water change now; the fish are in acute toxicity territory.

### Why borrow these numbers at all

The hobby has no equivalent body of testing. The EPA's criteria are the most rigorously derived freshwater ammonia thresholds in print — built from genus-level toxicity tests across native species, including freshwater mussels (notably more sensitive than fish, which is why these numbers got stricter in 2013 when mussel data was added). Until the hobby produces something better, these are the cleanest reference points we've got.

#### Source

U.S. Environmental Protection Agency (2013). _Aquatic Life Ambient Water Quality Criteria for Ammonia – Freshwater 2013._ EPA 822-R-13-001. Office of Water, Washington, DC, April 2013.

-   [Official PDF on epa.gov](https://www.epa.gov/sites/default/files/2015-08/documents/aquatic-life-ambient-water-quality-criteria-for-ammonia-freshwater-2013.pdf) (Tables 5a/5b for full lookup)
-   [EPA program page](https://www.epa.gov/wqc/aquatic-life-criteria-ammonia)
-   [EPA fact sheet (plain-language summary)](https://www.epa.gov/sites/default/files/2015-08/documents/fact_sheet_aquatic-life-ambient-water-quality-criteria-for-ammonia-freshwater-2013.pdf)

Cycling the tank

## Safe nitrite levels

Nitrite is the dangerous middle step in cycling — your ammonia-eating bacteria turn ammonia into nitrite, and a second set of bacteria (slower to establish) turns that into the much less toxic nitrate. In a cycled tank, nitrite reads zero. If it doesn't, something has crashed.

### The hobby rule

-   **Cycled tank — 0 ppm.** Anything detectable means your nitrite-oxidizers aren't keeping up. Look for recent overfeeding, a dead fish you missed, substrate disturbance that released gunk, or antibacterial dosing that wiped part of the biofilter.
-   **During cycling — spike is expected.** Nitrite typically appears 1–2 weeks after the ammonia spike, peaks for several days, then drops to 0 over the following 1–2 weeks as the second bacterial colony (_Nitrobacter_ / _Nitrospira_) catches up.
-   **Brown blood disease (methemoglobinemia).** Nitrite outcompetes oxygen on fish hemoglobin at the gill. Symptoms: tan/brown-tinted gills and blood, fish gasping at the surface even with strong aeration. Acute and fatal — and faster-acting than ammonia toxicity, which is why "cycling kills" usually happen at the nitrite stage, not the ammonia stage.

### Salt as a protective trick during cycling

Chloride competes with nitrite at the fish gill. Dosing **~1 ppt salt** (roughly 1 teaspoon of aquarium salt per 4 gallons) during the nitrite stage of a fish-in cycle meaningfully reduces uptake and protects the fish through the spike. Caveats — skip this if your stocking includes:

-   **Caridina shrimp** (Crystal Reds, Taiwan Bees, Pintos) — salt-intolerant.
-   **Scaleless fish** — corydoras, loaches, some catfish.
-   **Salt-sensitive plants** — most stem plants and many crypts will degrade.

For sensitive stocking, do a **fishless cycle** (dose ammonia, no fish in tank) and skip the salt entirely.

### EPA drinking-water MCL for nitrite

Contaminant

MCLG

MCL (enforceable)

Codified at

Nitrite (measured as Nitrogen, NO2\-N)

1.0 mg/L

1.0 mg/L

40 CFR §141.62

Nitrite's drinking-water MCL is **ten times stricter than nitrate's** (1.0 vs 10.0 mg/L as N), codified in the same section of the same regulation. The EPA recognizes nitrite as substantially more acutely toxic at lower concentrations — same principle that applies in aquariums, just at a different scale: nitrate hobby caps are 20–40 ppm, nitrite should be 0.

#### Source

U.S. Environmental Protection Agency. _National Primary Drinking Water Regulations — Inorganic Chemicals._ 40 CFR §141.62. The nitrite MCL is published in the same table as the nitrate MCL.

-   [EPA Primary Drinking Water Regulations table](https://www.epa.gov/ground-water-and-drinking-water/national-primary-drinking-water-regulations)

Water parameters

## Safe nitrate ranges

Hobby practice is roughly 20 ppm nitrate ceiling for shrimp, 40 for community fish. There's no aquatic-life criterion to anchor those caps to the way ammonia has one — but there is a federal drinking-water limit, and it matters because it tells you why the hobby's targets are stricter.

### EPA drinking-water Maximum Contaminant Level (MCL)

Contaminant

MCLG

MCL (enforceable)

Codified at

Nitrate (measured as Nitrogen, NO3\-N)

10 mg/L

10 mg/L

40 CFR §141.62

A critical unit detail: this 10 mg/L is measured **as nitrogen**, not as total nitrate ion. To convert to "nitrate as NO3\-" (which some test kits and overseas standards use), multiply by 4.43. The 10 mg/L NO3\-N equals roughly 44 mg/L NO3\-.

#### Source

U.S. Environmental Protection Agency. _National Primary Drinking Water Regulations — Inorganic Chemicals._ 40 CFR §141.62.

-   [EPA Primary Drinking Water Regulations table](https://www.epa.gov/ground-water-and-drinking-water/national-primary-drinking-water-regulations)

### Why hobby caps come in lower

The drinking-water MCL is set for human consumption — infants are the binding constraint, because nitrate can interfere with infant hemoglobin (methemoglobinemia, "blue baby syndrome"). It was never designed to protect long-term aquatic life. Hobby thresholds of 20–40 ppm exist because chronic exposure stresses fish at concentrations well below the human-health limit, and sensitive shrimp species show reproductive impairment lower still.

### Aquarium hobby soft caps

These are not regulatory — they are convergent recommendations from experienced keepers and aquarium veterinary literature. Use them as soft targets, not bright lines.

Stocking

Soft cap (ppm NO3\- as N)

Caridina shrimp (Crystal Reds, Taiwan Bees, Pintos)

≤ 10

Neocaridina shrimp (Cherry, Blue Dream, etc.)

≤ 20

Sensitive community fish (rasboras, tetras, corydoras)

≤ 20

Hardy community fish (most livebearers, danios)

≤ 40

Any freshwater inhabitant

< 80 (emergency threshold)

Quarantine & decon

## Treating new plants

If a moss ball you bought might contain zebra mussels — or you've already found them — here's how to kill them without seeding a waterway. USFWS published this protocol after the 2021 marimo recall. Do not flush, drain, or compost contaminated material; that's how invasions spread.

### Destroying a contaminated moss ball — choose ONE method

The protocol — pick one:

Method

Procedure

**Freeze**

Place the moss ball in a sealable plastic bag and freeze for at least **24 hours**.

**Boil**

Place the moss ball in boiling water for at least **1 full minute**.

**Bleach**

Submerge in regular unscented bleach diluted to **1/3 cup per gallon of water**, for **10 minutes**.

**Vinegar**

Submerge in **undiluted white vinegar for 20 minutes**.

### Disposal

After destruction, dispose in a **sealed plastic bag in the trash**. **Never down drains, waterways, or compost.** The treatment liquids (vinegar, boiling water, bleach solution) may be poured down a household drain — but never a storm drain.

### Decontaminating the aquarium itself

If the moss ball was in a stocked tank, the tank and equipment need decon too:

Method

Procedure

**Hot water**

Flush and coat tank, accessories, and equipment with **120°F water for at least 2 minutes**.

**Saline soak**

**1/2 cup salt per gallon**; soak substrate, rocks, décor, and filter media for **24 hours**.

**Bleach contaminated water**

**1/3 cup bleach per gallon**, let sit **10 minutes**, then drain to a household drain.

#### Source

U.S. Fish & Wildlife Service. _Zebra Mussel Disposal Instructions ("Destroy! Don't Dump!")_. USFWS, 2021.

-   [Disposal instructions (media page)](https://www.fws.gov/media/zebra-mussel-disposal-instructions)
-   [Disposal instructions PDF](https://www.fws.gov/sites/default/files/documents/zebra-mussel-disposal.pdf)
-   [USFWS 2021 marimo recall story](https://www.fws.gov/story/2021-03/invasive-zebra-mussels-found-moss-balls)

### Reporting confirmed contamination

Confirmed contamination should be reported to:

-   Your **state fish & wildlife agency** — they coordinate state-level response and may collect the specimen for confirmation.
-   The **USGS NAS database** (see below) — for the public scientific record.
-   **USFWS regional office** — for federally listed invasive species.

Don't dump

## Releasing tank life

Found something that shouldn't be in your part of the country — zebra mussels in a moss ball, an aquarium fish in a local stream? Report it. The federal NAS database is where invasion-front data actually gets tracked, and your sighting becomes part of the public scientific record researchers work from.

### Key URLs

Resource

URL

NAS database homepage

[nas.er.usgs.gov](https://nas.er.usgs.gov/)

Sighting report form

[nas.er.usgs.gov/SightingReport.aspx](https://nas.er.usgs.gov/SightingReport.aspx)

Zebra mussel (_Dreissena polymorpha_) species profile

[Zebra mussel fact sheet](https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=5)

Cherry shrimp (_Neocaridina davidi_) species profile

[Cherry shrimp fact sheet](https://nas.er.usgs.gov/queries/FactSheet.aspx?SpeciesID=2257)

### What the sighting form asks for

The form expects a complete record so the database entry is useful to researchers. Fields:

-   **Species** — type (Crustacean / Fish / Mollusk / Plant / etc.), common name, genus, species, number observed
-   **Date of observation** — MM/DD/YYYY (when you saw it, not when you're reporting)
-   **Location** — state, county, latitude/longitude (decimal or DMS), specific location description
-   **Observer** — name, email, telephone, address
-   **Image** — up to 4 photos (.jpg / .png / .heic, 1 MB each max)
-   **Comments** — context like dead-or-alive, where exactly (in the moss ball, in the filter, on substrate)

#### Source

U.S. Geological Survey. _Nonindigenous Aquatic Species Database._ Gainesville, FL. Maintained by the USGS Wetland and Aquatic Research Center.

### What makes a useful sighting report

A good sighting report needs five things:

-   **Location** — GPS coordinates or a precise address; "near my house" is not enough for the database to use.
-   **Date** — when you saw it, not when you're reporting.
-   **Species** — best guess at scientific name; the form accepts photos for verification.
-   **Photo** — clear, in-focus, with something for scale.
-   **Context** — was it dead or alive, how many, where exactly (in the moss ball, on the substrate, in the filter)?

Standard methods

## Water-testing methodology

When an article on this site says "test ammonia, nitrite, and nitrate" — these are the documents that define what those tests actually measure and how. Most aquarium liquid test kits implement one of these standard methods.

### EPA Method 350.1 — Ammonia by colorimetry

This is the federally referenced method that most commercial aquarium ammonia test kits implement (in simplified form). It measures Total Ammonia Nitrogen — both NH3 and NH4+ — using the automated phenate (indophenol blue) reaction: sample reacts with alkaline phenol and hypochlorite, intensified with sodium nitroprusside, absorbance read at 630–660 nm.

#### Source

U.S. Environmental Protection Agency. _Method 350.1: Determination of Ammonia Nitrogen by Semi-Automated Colorimetry,_ Revision 2.0. EPA-600/R-93-100. Cincinnati, OH, August 1993.

-   [EPA program page](https://www.epa.gov/esam/epa-method-3501-determination-ammonia-nitrogen-semi-automated-colorimetry)
-   [Method PDF](https://www.epa.gov/sites/default/files/2015-06/documents/epa-350.1.pdf)

### APHA Standard Methods — water testing reference

The professional reference for water analysis methodology. Aquarium test kits are usually simplified versions of these methods; the published volume is the authority on what each test actually measures.

Parameter

Section family

Ammonia (NH3 + NH4+ as N)

4500-NH3

Nitrite (NO2\- as N)

4500-NO2\-

Nitrate (NO3\- as N)

4500-NO3\-

Each section family contains multiple sub-methods (titrimetric, colorimetric, ion-selective electrode, flow injection). Sub-method letters have shifted between editions; cite by edition when referencing a specific lettered sub-method.

#### Source

Lipps, W.C., Baxter, T.E., and Braun-Howland, E.B. (eds.). _Standard Methods for the Examination of Water and Wastewater,_ 24th edition. APHA Press, Washington, DC, 2023. ISBN 978-0-87553-299-8.

-   [standardmethods.org](https://www.standardmethods.org/) (publisher; volume is paywalled)

## About this page

Every figure on this page is copied verbatim from the cited source. No paraphrase, no rounding, no telephone game from a forum thread to a wiki to here. If a source updates one of these criteria, we update the page — or, if we're slow, email **hello@tanktalks.sdfkjh.com** with the new reference and we'll fix it.

_This page is a reference, not medical or veterinary advice. If you're treating a sick tank, contact a qualified aquatic veterinarian._

Last updated May 11, 2026
