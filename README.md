# ProgramiranjeKorisnickihInterfejsa

Ovaj repozitorijum poseduje izvorni kod aplikacije obradjene na vezbama
iz predmeta PKI na smeru RN, Fakulteta za rucunarstvo i informatiku Universitet Singidunum

## Tehnologije

Aplikacija je razijena u potpunom FrontEnd okruzenju Angular 18. Pored toga koriscene su dodatne biblioteke :

- [Angular Material] (https://material.angular.io/)
- [Sweet Alert 2] (https://sweetalert2.github.io/)

## Struktura aplikacije 

Izvorni kod aplikacije koristi standardnu strukturu Angular projekta bez 
`app.modules.ts` datoteke koja nije potrebno upravo direktno  u komponentama koje ih upotrebljavaju 

Prikaz svih directory-a

- `src/app` - Glavni dir koji sadrzi sve komponente 
- `src/models` - Dir u kome skladistimo definicije tipova/interfejsa potrebnih za brzi razvoj applikacije.
- `src/services` - Dir koji sadrzi definicije servisa neophodnih za rad applikacije.

## Dodatne informacije

Applikacija koristi Angular Router koji zahteva da prilikom deployovanja app u prod, svaka putanja redirektovana na index.html  