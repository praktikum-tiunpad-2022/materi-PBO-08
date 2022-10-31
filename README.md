# Template Materi PBO

Untuk menjalankan slides :

- `pnpm install`
- `pnpm run dev`
- Buka di browser http://localhost:3030

## Setup tambahan

Supaya bisa di deploy ke github pages, segera ubah file [`deploy.yml`](./.github/workflows/deploy.yml) dari folder `.github\workflows` dibagian
```yml
 - name: Build
   run: slidev build --base /materi-PBO-N/
```

Ubah `/materi-PBO-N/` ke nama repo pertemuan, eg untuk pertemuan 1 : `/materi-PBO-01/`

## Notes
- Projek ini memakai pnpm (bukan npm)!
