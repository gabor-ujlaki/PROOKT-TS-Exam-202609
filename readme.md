### Komplett Vizsgafeladat: Rendezvény (fesztivál) Kezelő Rendszer 

Rendezvény: lehet bármi, szülinap, családi, fesztivál, koncert stb...


**Cél**: Egy OOP alapú rendezvény kezelő rendszer készítése TypeScriptben, amely lehetővé teszi rendezvények kezelését (létrehozás, szerkesztés, törlés), résztvevők regisztrálását és nyilvántartását. A rendszer támogassa az rendezvények tematikus csoportosítását, valamint nyújtson lehetőséget az rendezvények  és résztvevők adatainak lekérdezésére.
  
#### Projekt Létrehozása:

1. **npm használata**: A projekt npm segítségével hozz létre, legyen benne package json és tsconfig
2. **Verziókezelés**: Git használatával commitold a kódot, és tárold GitHub-on.
3. **Konfigurációs fájlok**: Állítsd be a `tsconfig.json` és `package.json` fájlokat a projekt konfigurációjához.

#### Segítség az Rendezvénykezelő Rendszer Projekt Feladathoz:

A rendezvény entitás minimum elvárásai: Név, hely, idő, résztvevők listája, a rendezvény tematikája/típusa.

1. **Rendezvény Kezelés**: Implementálj osztályokat és interface-eket az rendezvények kezeléséhez, beleértve azok létrehozását, szerkesztését, és törlését.
2. **Résztvevők Kezelése**: Készíts rendszert a résztvevők felvételéhez és nyilvántartásához, beleértve az rendezvényekhez való hozzáadásukat és eltávolításukat.
4. **Tematikus Csoportosítás**: Implementálj funkcionalitást az rendezvények tematikus csoportosítására, hogy a felhasználók könnyen megtalálhassák az őket érdeklő rendezvényeket.

Plusz feladat (nem kötelező! Csak akkor kezd el ha megvan az alap feladat!) : 
- Tesztelés: készíts jest keretrendszerrel unit teszteket, amennyiben nem konfigurálod, nem gond, elég ha szükséges test file megvan, benne pár példa tesztel. 
- Decoratorok: Használj decoratorokat az osztályok és metódusok funkcionalitásának kiterjesztésére, például az rendezvények logolására (a kód elég, config/működés nem kell)
- Aszinkronitás: Implementálj Promise-okat és/vagy async/await szintaxist az aszinkron műveletek kezelésére, például az  objektumok létrehozására - csak hibakezelés végett alkalmazd 