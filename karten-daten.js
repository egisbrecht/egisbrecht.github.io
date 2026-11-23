// Kartendaten für Lernkarten.html (Lernen und Drucken)
// Neue Karten nur hier eintragen.

const BLUT = [
  // ---------- Aufgaben des Blutes ----------
  { thema: "Aufgaben des Blutes", front: "Nenne 6 allgemeine Aufgaben des Blutes.",
    back: `<ol>
      <li>Transport von <b>Sauerstoff</b> (O₂)</li>
      <li>Transport von <b>Kohlendioxid</b> (CO₂)</li>
      <li>Transport von <b>Nährstoffen</b></li>
      <li><b>Abtransport von Abfallstoffen</b></li>
      <li><b>Abwehr</b> von Krankheitserregern</li>
      <li>Regulation der <b>Körpertemperatur</b> (Wärmeverteilung)</li>
    </ol>
    <div class="tip">Merkhilfe: 4× Transport + Abwehr + Wärme</div>` },
  { thema: "Aufgaben des Blutes", front: "Welche Stoffe transportiert das Blut? (4 Transportaufgaben)",
    back: `<ul>
      <li>Sauerstoff (O₂) → zu den Zellen</li>
      <li>Kohlendioxid (CO₂) → zur Lunge</li>
      <li>Nährstoffe (z. B. Zucker, Fette) → zu den Zellen</li>
      <li>Abfallstoffe (z. B. Harnstoff) → zu den Ausscheidungsorganen</li>
    </ul>` },
  { thema: "Aufgaben des Blutes", front: "Welche Aufgaben hat das Blut außer dem Transport? (2)",
    back: `<ul>
      <li><b>Abwehr</b> von Krankheitserregern</li>
      <li><b>Regulation der Körpertemperatur</b> – verteilt die Wärme im Körper</li>
    </ul>
    <div class="tip">Zusätzlich möglich: Blutgerinnung, Wasserhaushalt, Hormontransport</div>` },

  // ---------- Blutzellen – Namen ----------
  { thema: "Blutzellen – Namen", front: "Wie werden Erythrozyten auch genannt?",
    back: `<b>Rote Blutkörperchen</b>` },
  { thema: "Blutzellen – Namen", front: "Wie werden Leukozyten auch genannt?",
    back: `<b>Weiße Blutkörperchen</b>` },
  { thema: "Blutzellen – Namen", front: "Wie werden Thrombozyten auch genannt?",
    back: `<b>Blutplättchen</b>` },
  { thema: "Blutzellen – Namen", front: "Fachbegriff für: rote Blutkörperchen?",
    back: `<b>Erythrozyten</b>
    <div class="tip">„erythros“ = rot</div>` },
  { thema: "Blutzellen – Namen", front: "Fachbegriff für: weiße Blutkörperchen?",
    back: `<b>Leukozyten</b>
    <div class="tip">„leukos“ = weiß</div>` },
  { thema: "Blutzellen – Namen", front: "Fachbegriff für: Blutplättchen?",
    back: `<b>Thrombozyten</b>
    <div class="tip">„thrombos“ = Klumpen / Pfropf</div>` },

  // ---------- Blutzellen – Aufgaben ----------
  { thema: "Blutzellen – Aufgaben", front: "Primäre Aufgabe der Thrombozyten?",
    back: `<b>Blutgerinnung</b>` },
  { thema: "Blutzellen – Aufgaben", front: "Primäre Aufgabe der Erythrozyten?",
    back: `<b>Sauerstofftransport</b> (auch CO₂-Transport)` },
  { thema: "Blutzellen – Aufgaben", front: "Primäre Aufgabe der Leukozyten?",
    back: `<b>Körperabwehr</b> (Abwehr von Krankheitserregern)` },
  { thema: "Blutzellen – Aufgaben", key: "blut|Ordne zu: Körperabwehr · Blutgerinnung · Sauerstofftransport",
    front: "Ordne zu:<br>Körperabwehr · Blutgerinnung · Sauerstofftransport<br><span class='small'>(Thrombozyten, Erythrozyten, Leukozyten)</span>",
    back: `<ul>
      <li>A. Thrombozyten → <b>2. Blutgerinnung</b></li>
      <li>B. Erythrozyten → <b>3. Sauerstofftransport</b></li>
      <li>C. Leukozyten → <b>1. Körperabwehr</b></li>
    </ul>
    <div class="tip">Lösung: A-2 · B-3 · C-1</div>` },

  // ---------- Blutgerinnung ----------
  { thema: "Blutgerinnung", front: "Erkläre den Ablauf der Blutgerinnung! (5 Schritte)",
    back: `<ol>
      <li><b>Gefäßverengung</b></li>
      <li><b>Blutplättchen haften an</b></li>
      <li><b>Bildung eines Pfropfens</b></li>
      <li><b>Blutgerinnung (Fibrinbildung)</b></li>
      <li><b>Wundverschluss</b> (Thrombus)</li>
    </ol>
    <div class="tip">Verengung → Anheften → Verklumpen → Fibrinnetz → Wundverschluss</div>` },
  { thema: "Blutgerinnung", front: "Blutgerinnung – Schritt 1: Gefäßverengung",
    back: `<ul>
      <li>Das verletzte Blutgefäß <b>zieht sich zusammen</b></li>
      <li>Dadurch fließt <b>weniger Blut</b> aus der Wunde</li>
    </ul>` },
  { thema: "Blutgerinnung", front: "Blutgerinnung – Schritt 2: Blutplättchen haften an",
    back: `<ul>
      <li>Blutplättchen <b>lagern sich an der verletzten Gefäßwand an</b></li>
      <li>Sie werden <b>aktiviert</b> und sammeln sich an der Verletzungsstelle</li>
    </ul>` },
  { thema: "Blutgerinnung", front: "Blutgerinnung – Schritt 3: Bildung eines Pfropfens",
    back: `<ul>
      <li>Die Blutplättchen <b>verbinden sich miteinander</b> (verklumpen)</li>
      <li>Es entsteht ein <b>erster Verschluss</b> der Wunde</li>
    </ul>` },
  { thema: "Blutgerinnung", front: "Blutgerinnung – Schritt 4: Fibrinbildung",
    back: `<ul>
      <li><b>Gerinnungsfaktoren</b> werden aktiviert</li>
      <li><b>Prothrombin → Thrombin</b></li>
      <li>Thrombin wandelt <b>Fibrinogen → Fibrin</b> um</li>
      <li>Fibrinfäden bilden ein <b>Netz</b> und stabilisieren den Pfropfen</li>
    </ul>` },
  { thema: "Blutgerinnung", front: "Blutgerinnung – Schritt 5: Wundverschluss",
    back: `<ul>
      <li>Das Fibrinnetz hält Blutplättchen und Blutzellen fest</li>
      <li>Es entsteht ein <b>stabiler Blutpfropf (Thrombus)</b></li>
      <li>Die <b>Blutung wird gestoppt</b></li>
    </ul>` },
  { thema: "Blutgerinnung", front: "Was wird bei der Gerinnung in was umgewandelt?",
    back: `<ul>
      <li><b>Prothrombin → Thrombin</b></li>
      <li><b>Fibrinogen → Fibrin</b> (durch Thrombin)</li>
    </ul>
    <div class="tip">Reihenfolge: erst Thrombin, dann Fibrin</div>` },
  { thema: "Blutgerinnung", front: "Wie heißt der stabile Blutpfropf am Ende der Gerinnung?",
    back: `<b>Thrombus</b>` },
  { thema: "Blutgerinnung", front: "Blutgerinnung in einem Satz?",
    back: `Die Blutgerinnung verschließt verletzte Blutgefäße mithilfe von <b>Blutplättchen</b> und <b>Fibrin</b>.` }
];

// [Begriff, Bedeutung, Thema]
const VOKABELN = [
  // Lage- und Richtungsbezeichnungen
  ["Kranial", "kopfwärts", "Lage & Richtung"],
  ["Kaudal", "steißwärts", "Lage & Richtung"],
  ["Frontal", "stirnwärts", "Lage & Richtung"],
  ["Okzipital", "hinterhauptwärts", "Lage & Richtung"],
  ["Ventral", "bauchwärts", "Lage & Richtung"],
  ["Dorsal", "rückenwärts", "Lage & Richtung"],
  ["Plantar", "fußsohlenwärts", "Lage & Richtung"],
  ["Anterior", "vorne", "Lage & Richtung"],
  ["Posterior", "hinten", "Lage & Richtung"],
  ["Proximal", "zum Rumpf hin", "Lage & Richtung"],
  ["Distal", "vom Rumpf entfernt", "Lage & Richtung"],
  ["Dexter", "rechts", "Lage & Richtung"],
  ["Sinister", "links", "Lage & Richtung"],
  ["Medial", "zur Mitte", "Lage & Richtung"],
  ["Lateral", "seitwärts", "Lage & Richtung"],
  ["Superior", "oben", "Lage & Richtung"],
  ["Inferior", "unten", "Lage & Richtung"],
  ["Zentral", "zur Mitte hin", "Lage & Richtung"],
  ["Tibial", "zum Schienbein hin", "Lage & Richtung"],
  ["Fibular", "zum Wadenbein hin", "Lage & Richtung"],
  ["Radial", "zur Speiche hin", "Lage & Richtung"],
  ["Ulnar", "zur Elle hin", "Lage & Richtung"],
  ["Median", "Mittellinie", "Lage & Richtung"],
  ["Peripher", "zum Rand hin", "Lage & Richtung"],
  ["Internus", "innenliegend", "Lage & Richtung"],
  ["Externus", "außenliegend", "Lage & Richtung"],
  ["Nasal", "nasenwärts", "Lage & Richtung"],
  ["Temporal", "schläfenwärts", "Lage & Richtung"],
  ["Superficialis", "oberflächlich", "Lage & Richtung"],
  ["Profundus", "tiefliegend", "Lage & Richtung"],
  ["Femoral", "zum Oberschenkel gehörend / den Oberschenkel betreffend", "Lage & Richtung"],
  ["Ascendens", "aufsteigend", "Lage & Richtung"],
  ["Descendens", "absteigend", "Lage & Richtung"],
  ["Medius", "der Mittlere (zwischen zwei anderen gelegen)", "Lage & Richtung"],
  ["Minimus", "der Kleinste", "Lage & Richtung"],

  // Fuß- und Nagelerkrankungen
  ["Caro luxurians", "Wildes Fleisch (Hypergranulation)", "Fuß & Nagel"],
  ["Clavus", "Hühnerauge", "Fuß & Nagel"],
  ["Clavus durus", "Hartes Hühnerauge", "Fuß & Nagel"],
  ["Clavus mollis", "Weiches Hühnerauge", "Fuß & Nagel"],
  ["Malum perforans", "Druckgeschwür am Fuß eines Diabetikers", "Fuß & Nagel"],
  ["Subunguale Exostose", "Knochenwucherung unter dem Nagel", "Fuß & Nagel"],
  ["Subunguales Hämatom", "Bluterguss unter der Nagelplatte", "Fuß & Nagel"],
  ["Subunguale Keratose", "Verhornung unter der Nagelplatte", "Fuß & Nagel"],
  ["Tinea pedis", "Fußpilz", "Fuß & Nagel"],
  ["Unguis", "Nagel", "Fuß & Nagel"],
  ["Unguis convolutus", "Rollnagel", "Fuß & Nagel"],
  ["Ulcus cruris venosum", "Unterschenkelgeschwür durch eine Venenschwäche", "Fuß & Nagel"],
  ["Unguis incarnatus", "Eingewachsener Fußnagel", "Fuß & Nagel"],
  ["Unguis inflexus", "In Wachstumsrichtung stark gekrümmter Nagel", "Fuß & Nagel"],
  ["Anonychie", "Fehlen eines Nagels von Geburt an", "Fuß & Nagel"],
  ["Brachyonychie", "Sehr kurze Nägel", "Fuß & Nagel"],
  ["Dolichonychie", "Sehr lange Nägel", "Fuß & Nagel"],
  ["Heloma", "Hühnerauge", "Fuß & Nagel"],
  ["Koilonychie", "Löffelnagel", "Fuß & Nagel"],
  ["Leukonychie", "Weißfärbung des Nagels", "Fuß & Nagel"],
  ["Onychauxis", "Verdickte Nagelplatte", "Fuß & Nagel"],
  ["Onychogryposis", "Krallennagel", "Fuß & Nagel"],
  ["Onycholysis", "Nagelablösung", "Fuß & Nagel"],
  ["Onychomadese", "Ausfall eines oder mehrerer Nägel", "Fuß & Nagel"],
  ["Onychomykose", "Nagelpilz", "Fuß & Nagel"],
  ["Onychophagie", "Nägelkauen", "Fuß & Nagel"],
  ["Onychophosis", "Nagelfalzverhornung", "Fuß & Nagel"],
  ["Onychorrhexis", "Nagelbrüchigkeit", "Fuß & Nagel"],
  ["Onychoschisis", "Schichtweises Absplittern der Nagelplatte", "Fuß & Nagel"],
  ["Orthonyxie", "Nagelkorrektur (Spange)", "Fuß & Nagel"],

  // Vorsilben
  ["Makro-", "groß", "Vorsilben"],
  ["Mega-", "sehr groß", "Vorsilben"],
  ["Mikro-", "klein", "Vorsilben"],
  ["Poly-", "viel / mehrere", "Vorsilben"],
  ["Hemi-", "halb", "Vorsilben"],
  ["Mono-", "ein / einzig", "Vorsilben"],
  ["Di-", "zwei / doppelt", "Vorsilben"],

  // Allgemeine Krankheitslehre
  ["Anamnese", "Krankengeschichte", "Krankheitslehre"],
  ["Ätiologie", "Entstehung (Ursache) einer Krankheit", "Krankheitslehre"],
  ["Pathogenese", "Krankheitsentwicklung", "Krankheitslehre"],
  ["Inspektion", "Betrachtung", "Krankheitslehre"],
  ["Palpation", "Abtasten", "Krankheitslehre"],
  ["Auskultation", "Abhorchen (Stethoskop)", "Krankheitslehre"],
  ["Perkussion", "Abklopfen", "Krankheitslehre"],
  ["Diagnose", "Krankheitserkennung", "Krankheitslehre"],
  ["Differenzialdiagnose", "Unterscheidung ähnlicher Krankheiten", "Krankheitslehre"],
  ["Symptom", "Krankheitszeichen", "Krankheitslehre"],
  ["Syndrom", "Typische Kombination gleichzeitig auftretender Symptome", "Krankheitslehre"],
  ["Inzidenz", "Neue Krankheitsfälle in einem Zeitraum", "Krankheitslehre"],
  ["Therapie", "Krankheitsbehandlung", "Krankheitslehre"],
  ["Inflammation", "Entzündung", "Krankheitslehre"],
  ["Die 5 Kardinalsymptome einer Entzündung?", "Rubor – Rötung<br>Calor – Überwärmung<br>Tumor – Schwellung<br>Dolor – Schmerz<br>Functio laesa – Funktionseinschränkung", "Krankheitslehre"],
  ["Rubor", "Rötung (Entzündungszeichen)", "Krankheitslehre"],
  ["Calor", "Überwärmung (Entzündungszeichen)", "Krankheitslehre"],
  ["Tumor", "Schwellung (Entzündungszeichen)", "Krankheitslehre"],
  ["Dolor", "Schmerz (Entzündungszeichen)", "Krankheitslehre"],
  ["Functio laesa", "Funktionseinschränkung (Entzündungszeichen)", "Krankheitslehre"],
  ["Infektion", "Eindringen und Vermehren von Krankheitserregern im Körper", "Krankheitslehre"],
  ["Epidemie", "Gehäuftes Auftreten einer Krankheit in einer Region", "Krankheitslehre"],
  ["Kontamination", "Verunreinigung", "Krankheitslehre"],
  ["Epidemiologie", "Lehre von der Verbreitung und Häufigkeit von Krankheiten", "Krankheitslehre"],
  ["Endemie", "Krankheit kommt in einer Region dauerhaft oder regelmäßig vor", "Krankheitslehre"],
  ["Konservativ", "Behandlung ohne OP (Medikamente, Verbände)", "Krankheitslehre"],
  ["Symptomatisch", "Linderung der Symptome (z. B. Schmerzmittel)", "Krankheitslehre"],
  ["Kausal", "Behandlung der Krankheitsursache (z. B. Medikation)", "Krankheitslehre"],
  ["Epikrise", "Zusammenfassung des Krankheitsverlaufs", "Krankheitslehre"],
  ["Prognose", "Vorhersage des Krankheitsverlaufs", "Krankheitslehre"],
  ["Morbidität", "Krankheitszustand einer Bevölkerung in einer bestimmten Zeit", "Krankheitslehre"],
  ["Mortalität", "Sterblichkeit einer Bevölkerung in einer bestimmten Zeit", "Krankheitslehre"],
  ["Letalität", "Anteil der an einer bestimmten Krankheit Sterbenden", "Krankheitslehre"],
  ["Prävalenz", "Alle bestehenden Krankheitsfälle zu einem bestimmten Zeitpunkt", "Krankheitslehre"]
];

const ZYTOLOGIE = [
  // Kennzeichen des Lebens
  { thema: "Kennzeichen des Lebens", front: "Nenne die 8 Kennzeichen des Lebens.",
    back: `<ol>
      <li><b>Stoffwechsel</b></li><li><b>Wachstum</b></li><li><b>Entwicklung</b></li><li><b>Fortpflanzung</b></li>
      <li><b>Bewegung</b></li><li><b>Reizbarkeit</b></li><li><b>Zellaufbau</b></li><li><b>Vererbung</b></li>
    </ol>` },
  { thema: "Kennzeichen des Lebens", front: "Stoffwechsel", back: `Aufnahme und Verarbeitung von <b>Nährstoffen und Energie</b>.` },
  { thema: "Kennzeichen des Lebens", front: "Wachstum", back: `Zunahme von <b>Größe und Masse</b>.` },
  { thema: "Kennzeichen des Lebens", front: "Entwicklung", back: `<b>Veränderung und Reifung</b> eines Lebewesens.` },
  { thema: "Kennzeichen des Lebens", front: "Fortpflanzung", back: `Bildung <b>neuer Lebewesen</b>.` },
  { thema: "Kennzeichen des Lebens", front: "Bewegung", back: `<b>Eigenbewegung</b> oder Bewegung von Körperteilen.` },
  { thema: "Kennzeichen des Lebens", front: "Reizbarkeit", back: `<b>Reaktion auf Reize</b> aus der Umwelt.` },
  { thema: "Kennzeichen des Lebens", front: "Zellaufbau", back: `Alle Lebewesen bestehen aus <b>einer oder mehreren Zellen</b>.` },
  { thema: "Kennzeichen des Lebens", front: "Vererbung", back: `Weitergabe von <b>Erbinformationen</b>.` },

  // Zelle & Gewebe
  { thema: "Zelle & Gewebe", front: "Was ist eine Zelle?",
    back: `Die <b>kleinste lebensfähige Einheit</b> des Lebens.<br>Sie ist der <b>Grundbaustein aller Lebewesen</b> und besteht aus verschiedenen Zellbestandteilen und Zellorganellen.` },
  { thema: "Zelle & Gewebe", front: "Was ist ein Gewebe?",
    back: `Ein <b>Zusammenschluss ähnlicher Zellen</b>, die gemeinsam eine <b>bestimmte Aufgabe</b> erfüllen.` },
  { thema: "Zelle & Gewebe", front: "Nenne 5 Gewebearten.",
    back: `<ul><li>Muskelgewebe</li><li>Nervengewebe</li><li>Fettgewebe</li><li>Bindegewebe</li><li>Knorpelgewebe</li></ul>` },
  { thema: "Zelle & Gewebe", front: "Aus wie vielen Zellen besteht ein erwachsener Mensch?",
    back: `Ungefähr <b>30–40 Billionen</b> Zellen.` },
  { thema: "Zelle & Gewebe", front: "Nenne Beispiele für Zellarten im menschlichen Körper.",
    back: `<ul><li>Nervenzellen</li><li>Knochenzellen</li><li>Blutzellen</li><li>Hautzellen</li><li>Fettzellen</li><li>Muskelzellen</li><li>Eizellen</li></ul>` },

  // Zellaufbau
  { thema: "Zellaufbau", front: "Nenne die 3 Bestandteile menschlicher Zellen.",
    back: `<ol><li><b>Zellmembran</b></li><li><b>Zellplasma</b> (Zytoplasma)</li><li><b>Zellkern</b></li></ol>` },
  { thema: "Zellaufbau", front: "Zellmembran – Aufgabe?",
    back: `<b>Begrenzt</b> die Zelle und <b>kontrolliert den Stoffaustausch</b>.` },
  { thema: "Zellaufbau", front: "Zellplasma (Zytoplasma) – was ist das?",
    back: `Die <b>flüssige Grundsubstanz</b> der Zelle.` },
  { thema: "Zellaufbau", front: "Zellkern – Aufgabe?",
    back: `Enthält die <b>Erbinformation (DNA)</b> und <b>steuert</b> viele Zellvorgänge.<div class="tip">Merksatz: Zellkern = Steuerzentrale</div>` },
  { thema: "Zellaufbau", front: "Welche Zellen besitzen keinen Zellkern?",
    back: `<b>Reife rote Blutkörperchen</b> (Erythrozyten).` },
  { thema: "Zellaufbau", front: "Nenne 3 Besonderheiten der Pflanzenzelle.",
    back: `<ul>
      <li><b>Zellwand</b> – Stabilität und Schutz</li>
      <li><b>Chloroplasten</b> – Fotosynthese</li>
      <li><b>Zentralvakuole</b> – speichert Wasser, sorgt für Stabilität</li>
    </ul>` },
  { thema: "Zellaufbau", front: "Pflanzenzelle: Zellwand – Aufgabe?", back: `Gibt <b>Stabilität und Schutz</b>.` },
  { thema: "Zellaufbau", front: "Pflanzenzelle: Chloroplasten – Aufgabe?", back: `Ermöglichen die <b>Fotosynthese</b>.` },
  { thema: "Zellaufbau", front: "Pflanzenzelle: Zentralvakuole – Aufgabe?", back: `<b>Speichert Wasser</b> und sorgt für <b>Stabilität</b>.` },

  // Zellorganellen
  { thema: "Zellorganellen", front: "Nenne 5 Zellorganellen und ihre Aufgaben.",
    back: `<ul>
      <li><b>Mitochondrien</b> – Energie (ATP)</li>
      <li><b>Golgi-Apparat</b> – verändern, sortieren, verpacken</li>
      <li><b>Raues ER</b> – Proteine (mit Ribosomen)</li>
      <li><b>Glattes ER</b> – Fette, Entgiftung</li>
      <li><b>Lysosomen</b> – Verdauung, Abbau</li>
    </ul>` },
  { thema: "Zellorganellen", front: "Mitochondrien – Aufgabe?",
    back: `<b>Kraftwerke der Zelle</b>; produzieren Energie in Form von <b>ATP</b>.` },
  { thema: "Zellorganellen", front: "Golgi-Apparat – Aufgabe?",
    back: `<b>Verändert, sortiert und verpackt</b> Stoffe für den Transport.<div class="tip">Merksatz: Verpackungs- und Versandstation</div>` },
  { thema: "Zellorganellen", front: "Raues endoplasmatisches Retikulum (ER) – Aufgabe?",
    back: `<b>Produziert und transportiert Proteine</b>; besitzt <b>Ribosomen</b>.` },
  { thema: "Zellorganellen", front: "Glattes endoplasmatisches Retikulum (ER) – Aufgabe?",
    back: `<b>Produziert Fette</b> und hilft bei der <b>Entgiftung</b>.` },
  { thema: "Zellorganellen", front: "Unterschied raues und glattes ER?",
    back: `<ul>
      <li><b>Raues ER:</b> mit Ribosomen → Proteine</li>
      <li><b>Glattes ER:</b> ohne Ribosomen → Fette, Entgiftung</li>
    </ul>` },
  { thema: "Zellorganellen", front: "Lysosomen – Aufgabe?",
    back: `<b>Verdauen</b> Fremd- und Abfallstoffe und <b>bauen Zellbestandteile ab</b>.<div class="tip">Merksatz: Lysosomen = Verdauung und Abbau</div>` },
  { thema: "Zellorganellen", front: "Welches Zellorganell nennt man „Kraftwerk der Zelle“?", back: `Die <b>Mitochondrien</b>` },
  { thema: "Zellorganellen", front: "Welches Zellorganell ist die „Verpackungs- und Versandstation“?", back: `Der <b>Golgi-Apparat</b>` },

  // Mitose & Meiose
  { thema: "Mitose & Meiose", front: "Mitose – was ist das und wozu dient sie?",
    back: `<b>Körperzellteilung</b>
    <ul>
      <li>Dient dem <b>Wachstum</b> und der <b>Erneuerung</b> von Zellen</li>
      <li>1 Mutterzelle → <b>2 genetisch gleiche</b> Tochterzellen</li>
      <li>Chromosomensatz <b>bleibt gleich</b> (46 Chromosomen)</li>
    </ul>` },
  { thema: "Mitose & Meiose", front: "Meiose – was ist das und wozu dient sie?",
    back: `<b>Geschlechtszellteilung</b>
    <ul>
      <li>Dient der Bildung von <b>Ei- und Samenzellen</b></li>
      <li>1 Mutterzelle → <b>4 genetisch unterschiedliche</b> Zellen</li>
      <li>Chromosomensatz wird <b>halbiert</b> (23 Chromosomen)</li>
    </ul>` },
  { thema: "Mitose & Meiose", front: "Unterschied Mitose und Meiose?",
    back: `<ul>
      <li><b>Mitose:</b> 2 gleiche Tochterzellen, 46 Chromosomen → Wachstum/Erneuerung</li>
      <li><b>Meiose:</b> 4 unterschiedliche Zellen, 23 Chromosomen → Ei- und Samenzellen</li>
    </ul>` },
  { thema: "Mitose & Meiose", front: "Wie viele Chromosomen haben menschliche Körperzellen – und wie viele Ei- bzw. Samenzellen?",
    back: `Körperzellen: <b>46</b> Chromosomen<br>Ei- und Samenzellen: <b>23</b> Chromosomen (halbiert durch Meiose)` },
  { thema: "Mitose & Meiose", front: "Wie viele Zellen entstehen bei Mitose und bei Meiose?",
    back: `Mitose: <b>2</b> genetisch gleiche Zellen<br>Meiose: <b>4</b> genetisch unterschiedliche Zellen` }
];

// ---------- Bereiche ----------
// Neuer Bereich: Karten-Liste oben anlegen und hier eine Zeile ergänzen – das Menü passt sich automatisch an.
//   karten:   [{ thema, front, back }, …]        – Frage/Antwort-Karten
//   vokabeln: [[Begriff, Bedeutung, Thema], …]   – Vokabeln (mit Richtungswechsel Latein ⇄ Deutsch)
const BEREICHE = {
  blut: { name: "Anatomie Blut", icon: "🩸", farbe: "#b3001b", karten: BLUT },
  vok:  { name: "Vokabeln",      icon: "📖", farbe: "#e65100", vokabeln: VOKABELN },
  zyto: { name: "Zytologie",     icon: "🔬", farbe: "#00796b", karten: ZYTOLOGIE }
};

const stripHtml = s => s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

// Jede Karte: { id, bereich, thema, front, back, [begriff, bedeutung] }
// Die id entspricht dem alten Format "bereich|Vorderseitentext", damit gespeicherte Statistiken erhalten bleiben.
const KARTEN = [];
Object.entries(BEREICHE).forEach(([bereich, b]) => {
  (b.karten || []).forEach(k => KARTEN.push({ bereich, ...k }));
  (b.vokabeln || []).forEach(([begriff, bedeutung, thema]) => KARTEN.push({
    bereich, thema, begriff, bedeutung,
    front: begriff,
    back: `<div class="vok-answer"><b>${begriff}</b><br>${bedeutung}</div>`
  }));
});
KARTEN.forEach(k => { k.id = k.key || k.bereich + "|" + stripHtml(k.front); });

// Vokabel in Richtung Deutsch → Fachbegriff. Fragen (z. B. „Die 5 Kardinalsymptome…?“) bleiben unverändert.
function vokabelUmdrehen(k) {
  if (!k.begriff || k.begriff.endsWith("?")) return k;
  const gleich = KARTEN.filter(x => x !== k && x.bereich === k.bereich && x.begriff &&
    x.bedeutung.toLowerCase() === k.bedeutung.toLowerCase()).map(x => x.begriff);
  const auch = gleich.length ? `<div class="tip">Gleiche Bedeutung: ${gleich.join(", ")}</div>` : "";
  return { ...k, id: k.id + "|rev", front: k.bedeutung,
    back: `<div class="vok-answer"><b>${k.begriff}</b></div>${auch}` };
}