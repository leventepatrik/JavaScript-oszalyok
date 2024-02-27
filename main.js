/*lista - azonos típusú változok tárolására  */
let lista = ["első", "második"]

console.log(lista[0])

lista[0]= "átirt első"

console.log(lista)

lista[10]="tizenegyedik"

console.log(lista)
console.log(lista[5])

//listához uj elem adás - utlolsó hely után teszi az elemet
lista.push("következő elem")
console.log(lista)

//utolsó elem eltávolitása a listábol
lista.pop()
console.log(lista)

const szam = 5;
//szam= 12; const értéke nem változtatható meg

const lista2 =[12,13,14,15];
console.log(lista2);
//const lista2=[23,24,25]; konstans változóna akartam új éréket adni.
lista2[0]=2222222222222;
console.log(lista2);
lista2.push(33333333);
console.log(lista2)

//Objektumok
//étlapos feldat
//ételnév lista -> szöveges tipusú
//ételár lista -> szám tipusú


const etel1 = {
    nev:"Brassoi aproópecsenye",
    ar: 2990
}
etel1.mennyiseg=3 //új kulcsot adok az objektumhoz

console.log(etel1)

const etel2={
    nev:"BBQ",
    ar:4200,
    meret:45,
    mennyiseg:2
}

/*egy kutya adatai */
//egy objektum tulajdonképpen olyan mint az adatbázisban egy rekordja
//Kulcsok az adatbázisban
const pingvin1={
    nev:"Kapitány",
    fajta:"Szamárpingvin",
    szin:"fekete-fehér",
    magassag:70-95,
    szul_datum:2020,
    szul_hely:"Sydney"    
}

const pingvin2={
    nev:"Közlegény",
    fajta:"kék pingvin",
    szin:"kék",
    magassag:30-35,
    szul_datum:2022,
    szul_hely:"Belgium"
}

const Pingvinlista=[
    {
    nev:"Kapitány",
    fajta:"Szamárpingvin",
    szin:"fekete-fehér",
    magassag:70-95,
    szul_datum:2020,
    szul_hely:"Sydney"    
    },
    
    {
    nev:"Közlegény",
    fajta:"kék pingvin",
    szin:"kék",
    magassag:30-35,
    szul_datum:2022,
    szul_hely:"Belgium"
    }

]
//hogy érem el a Vili szinét
console.log(pingvinlista[0].szin)
