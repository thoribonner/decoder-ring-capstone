# decoder-ring-capstone

a fun web app to encode and decode nessages using one of three options:

 - Caesar Shift -- user provides a shift (for instance 7) and "cool" encodes to "jvvs"
 
 
 - Polybius Square -- using the table below "hello" would encode to "3251131343"
     
   
            | _ | 1 | 2 | 3 | 4   | 5 |
            |---|---|---|---|-----|---|
            | 1 | A | B | C |  D  | E |
            | 2 | F | G | H | I/J | K |
            | 3 | L | M | N |  O  | P |
            | 4 | Q | R | S |  T  | U |
            | 5 | V | W | X |  Y  | Z |
  
  - Substitution -- user provides an unique 26 character alphabet to substitute, using the table below, "bad" encodes to "&Qz"
  
            | A | B | C | D | E | ... |
            |---|---|---|---|---|-----|
            | Q | & | 9 | z | g | ... |
