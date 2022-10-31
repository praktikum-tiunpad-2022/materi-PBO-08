# Try-Catch

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

**Try-catch** merupakan salah satu cara **penanganan class exception** yang muncul akibat kondisi abnormal. Statement ini terdiri dari **blok try** dan **blok catch**.

**Blok try** berisikan **kode** yang berkemungkinan **memunculkan suatu exception**. Kode dalam blok ini akan dieksekusi **hingga muncul suatu exception**.

**Block catch** berisikan **kode** yang dieksekusi apabila **muncul suatu exception** dalam blok try sebelumnya. Blok catch memiliki **parameter class exception** yang **ingin ditangani.**

</div>
<div class='flex-row'>

```java
try {
  //  Block of code to try

} catch(Exception e) {
  //  Block of code to handle errors
  
}
```

</div>
</div>
