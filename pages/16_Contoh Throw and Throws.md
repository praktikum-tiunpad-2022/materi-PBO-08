# Contoh Throw & Throws

```java
import java.io.*;

class Throws {
    public static void bacaFile() throws FileNotFoundException {
        throw new FileNotFoundException("File tidak ditemukan");
    }

    public static void main(String[] args){
        try{
            bacaFile();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
```

<div>

```
Terjadi suatu error : File tidak ditemukan
```

</div>