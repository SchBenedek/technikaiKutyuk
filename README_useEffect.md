# React alkalmazások fejlesztése Frontend óra | 5. alkalom

## Miket tanulunk meg ebben a blokkban?

+ useEffect és json fájl fetch-elése, inteface és typescript használattal:

	```
    1. lépés:

        Komponens létrehozása:

            <Felhasznalok></Felhasznalok>

        Komponens meghívása:

            import Felhasznalok from './components/Felhasznalok'
            (Megjegyzés: Billentyűzet kombináció: alt + shift + . )

        Komponens alapjának elkészítése:

            import { } from "react"
            export default function Felhasznalok() {
                return <>
                    <h2>Felhasználók listája</h2>
                </>
            } 
    ```
    ```
    2. lépés:

        JSON fájl létrehozása a public mappában: 
        **felhasznalok.json** 
        névvel

        {
            "users": [
                {
                    "id": 1,
                    "firstName": "Péter",
                    "lastName": "Kovács",
                    "email": "p.kovacs@example.com"
                },
                {
                    "id": 2,
                    "firstName": "Zsuzsanna",
                    "lastName": "Nagy",
                    "email": "z.nagy@example.com"
                },
                {
                    "id": 3,
                    "firstName": "László",
                    "lastName": "Tóth",
                    "email": "l.toth@example.com"
                }
            ]
        }
    ```
    ```
    3. lépés:

        Adatok fetch-elése, felhasználók komponensmemóriába töltése:

            const [users, setUsers] = useState([])

            useEffect(() => {
                console.log('Felhasználók betöltése.') // tesztelés
                async function load() {
                    const response = await fetch('/felhasznalok.json')
                    const users = await response.json();
                    setUsers(users.users);
                }
                load()
                console.log(users) // tesztelés
            }, [])
    ```
    ```       
    4. lépés:

        Adatok kiíratása:

            <h2>Felhasználók listája</h2>
                <ul>
                    {
                        users.map((user) => <li>
                            {user.firstName} {user.lastName} - {user.email}
                        </li>)
                    }
                </ul>

        Megjegyzés: <li key={user.id}>
    ```
    ```
    5. lépés:

        Kiegészítés interface-ekkel:

            interface Users {
                users: User[]
            }

            interface User {
                id: number
                firstName: string
                lastName: string
                email: string
            }        

        Kiegészítés típusokkal a megfelelő helyeken:

            ...const [users, setUsers] = useState<User[]>([])...
            ...const users: Users = await response.json();...
            ...users.map((user: User)...
    ```

+ Dinamikus tag-ek én contentek létrehozása:

    ```
        <TagName tagName="h1" mainContent="Blablabla 1"></TagName>
        <TagName tagName="h2" mainContent="Blablabla 2"></TagName>
        <TagName tagName="h3" mainContent="Blablabla 3"></TagName>

        interface TagContentProps {
            tagName: string;
            mainContent: string;
        }

        export default function TagName(props: TagContentProps){
            const Tag = props.tagName as keyof JSX.IntrinsicElements;
            return <>
                <Tag>{props.mainContent}</Tag>
            </>
        }    
    ```

+ Egyéb hasznosságok:

	```
    saját készítésű json validálása:
        https://jsonlint.com/
    json fájlok interface-é alakítása:
        https://transform.tools/json-to-typescript
    chatGpt json konvertálása interface-ekké, vagy typescript type-okká
        promtok megfelelő megfogalmazása
	```

---

## FELADATOK useEffect-el és fetch-el kapcsolatban:

1. feladat: A projekt neve legyen **OlcsoAutok**!

    + Az órán tanult módszerrekkel készíts webes alkalmazást, <br>
    ami egyszerű bekezdésekben jeleníti meg az olcsó autók összes adatát!<br>
    + Nyugodtan dolgozz az _App.tsx_ fájlban;<br>
    az _olcsoAutok.json_ fájlt pedig másold a _public_ mappába;<br>
    + Nem szükséges interface|type készítése,<br>
    sem különösebb formázást nem kérek;<br>
    + legvégül a korábban elkészített **Lablec** komponenst hasznosítja újra az aktuális adatokkal!

---

2. feladat: A projekt neve legyen **TechnikaiKutyuk**!

    Az órán tanult módszerrekkel készíts webes alkalmazást, <br>
    ami az alábbi kéréseknek felel meg:
    + Másold a _technikaiKutyuk.json_ fájlt a _public_ mappába
    + Másold a _technikaiKutyuk.ts_ fájlt az _src_ mappába
    + Készíts komponenst **TelefonNevek** néven.<br>
      Ez a komponens azért felelős, hogy egyszerű bekezdésekben egymás alatt felsorolja a model-t és brand-et!
    + Készíts komponenst **TelefonArak** néven.<br>
      Ez a komponens azért felelős, hogy kilistázza a brand és price mezőket,<br>
      ezeket pedig szépen formázott kártyákban jeleníti meg!
    + Szorgalmi feladat: Készíts komponenst **TelefonExtra** névvel,<br>
      ami a _features_ mezőit írja ki az alábbi módon:
      "Apple iPhone 14 (háttértár: 128GB, kamera: 12MP, akku: 3110mAh)."

    + **Lablec** Hasznosítja újra a korábbi órákon elkészített 'Lábléc' komponenst az aktuális adatokkal!

---

3. feladat: A projekt neve legyen **NepszeruMagyarKonyvek**!

    Az órán tanult módszerrekkel készíts webes alkalmazást, <br>
    ami az alábbi kéréseknek (, utasításoknak) felel meg:
    + Másold a **magyarKonyvek.json** fájlt a _public_ mappába
    + Másdol a **magyarKonyvek.ts** fájlt az _src_ mappába
    + Az **App.tsx** fájlban csak komponensmeghívások legyenek!

    + Készíts komponenst **header** névvel, ami az alábbi feltételeknek felel meg:
        + tag-nevet fogad,
        + tartalmat fogad.

    + Az 1. feladathoz használd a **header** komponenst,
        + megjelenése: _h1_, tartalma: **Népszerű Magyar könyvek**

    + A 2.1 feladathoz használd ismét a **header** komponenst,
        + megjelenése: _h2_, tartalma: **Népszerű könyvek felsorolása** 
    + A 2.2. feladatban: hozz létre egy komponenst **NepszeruKonyvekFelsorolasban** komponenst,<br>
      Írasd ki a könyvek szerzőjét és a mű címét felsorolásban!

    + A 3.1 feladathoz használd ismét a **header** komponenst,
        + megjelenése: _h2_, tartalma: **Népszerű Magyar könyvek akciós ára táblázatban** 
    + A 3.2. feladatban: hozz létre egy komponenst **NepszeruMagyarKonyvekAkciosAraTablazatban** komponenst,<br>
      Értelem szerűen készíts táblázatot a népszerű magyar könyvekről:
        + A táblázatnak legyen fejléce: Sorszám | Könyv címe | Könyv ára
        + A könyv ára legyen áthúzva, mellette piros félkövér betűvel a 10%-kal csökkentett ára!

    + **Lablec** Hasznosítja újra a korábbi órákon elkészített 'Lábléc' komponenst az aktuális adatokkal!    

---

4. feladat: A projekt neve legyen **AutoDidaktaTanulas**!

    Az órán tanult módszerrekkel készíts webes alkalmazást, <br>
    aminek az alapja a _autoDidaktaTanulas_ mappában található weboldal.
    Az alábbi kéréseknek (, utasításoknak) feleljen meg az elkészített munkád:
    + Az oldal adatai alapján hozd létre a szükséges JSON fájlt
    + A JSON fájl alapján vagy interface-t, vagy type-ot készíts, amit használnod is kell!
    + A fetch-elést két módon készítheted el, amelyik szimpatikus számodra:
        + történhet az _App.tsx_ fájlban egyszeri alkalommal, ekkor a későbbi komponenseknek props-ként kell átadni az adatokat,
        + történhet fetch-elés a külön komponensek belsejében is, de ekkor külön JSON fájlt készíts a blokkokhoz!
    + A weboldalt bontsd szét komponensekké, javasolt az alábbi szerkezet:
        + **FejLec** komponens, ami a header képet és a főcímet tartalmazza
        + **AlCim** komponens, ami a tartalmat props-ként veszi át, ez mindig a komponenseken belül hívd meg és paraméterezd
        + **Elonyok** komponens, ami 'Az Autodidakta Tanulás Előnyei' szekció táblázatát rendereli le
        + **Modok** komponens, ami 'Az Autodidakta Tanulás Módjai' szekció felsorolását rendereli le
        + **Tippek** komponens, ami a 'Tippek az Eredményes Autodidakta Tanuláshoz' szekció sorszámozott listáját rendereli le
    
    + Szorgalmi feladat: Hogyan tudnám a fetch-elés kiszervezni egy fájlba? 
        
---