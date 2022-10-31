---
layout: center
---

# Exercise <kbd><span class='text-teal'>IllegalGradeException.java & Test.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-sm">

Buatlah <kbd>custom exception class</kbd> `IllegalGradeException` yang meng-extend `Exception` dengan message `Nilai tidak valid!`.

Buat juga class `Test` yang berisi method main dari program pada file `Test.java` berisi input nilai.

Buatlah baris try-catch untuk menampilkan `IllegalGradeException` ketika nilai kurang dari 0 atau lebih besar dari 100. Tampilkan `Nilai anda adalah [NILAI]` ketika nilai tidak melanggar aturan tadi.

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<span>Nilai berupa integer</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='mt-4 flex flex-col mb-2 gap-0'>

```bash
# ketika try-catch menemukan exception
InvalidGradeException: Nilai tidak valid!
    at Test.main(blablabla)

# ketika tidak ada exception
Nilai anda adalah 80
```

</div>
</div>
</div>
