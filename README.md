# osteAPI dokumentation

##Resurser

### GET /cheeses

resursen repræsatere alle oste i kartoteket.
resursen er formateret på følgende måde:

```JSON
[{
    "varenr": 4206969,
    "navn": "St clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St clemens",
    "antal": 15, 
    "beskrivelse": {
        "tekst": "Den ost er bare super smagfuld og dejlig indeni...",
        "smag": "mild",
        "vægt": 300,
        "billede": "stclemensblaaskimmel.jpg"
    }
}]
```


### GET /cheeses/\<varenummer>

Resursen reprænsatere en ost i kartoteket.
resursen er formateret på følgende måde

```{
    "varenr": 4206969,
    "navn": "St clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St clemens",
    "antal": 15, 
    "beskrivelse": {
        "tekst": "Den ost er bare super smagfuld og dejlig indeni...",
        "smag": "mild",
        "vægt": 300,
        "billede": "stclemensblaaskimmel.jpg"
    }
}
```