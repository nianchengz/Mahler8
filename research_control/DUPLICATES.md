# DUPLICATES AUDIT

Audit scope: all seven files recursively present under `sources_raw/` on 2026-09-01. No files were deleted, renamed, moved, or modified.

## Result

- **Exact duplicates:** none.
- **Likely file duplicates:** none.
- **Related or overlapping manifestations:** two cases, neither a duplicate.

## Exact-file test

Exact identity was tested with SHA-256 hashes and file size. Every hash is unique.

| File | Bytes | SHA-256 |
|---|---:|---|
| `Batstone_Mahler_Nietzsche_Pernerstorfer.pdf` | 21,967,997 | `431e36f2f394ef322f610fb56dff3d0272d4f7a7febb11ae979fd9bd39478f7f` |
| `Devutsky_Universal_Mystery_1906.pdf` | 2,005,359 | `1e68fa7a16f22046798de074e2d8f3e8b982530faf6a34765e7a83ad71d4e5b2` |
| `Goethe_Faust_II_German.txt` | 344,869 | `97299c5ee0548d6adf4b092e1645e2e62fa150c09edbd00ecec7c5e8bea313b3` |
| `Goethe_Faust_I_II_English.pdf` | 29,421,232 | `81dd22588d883eb1907fb5d65971752eb540ed09e30737144686517f31f0422d` |
| `Mullan_Poetry_Into_Song_Vol1.pdf` | 6,835,370 | `8fe4221a3e1134cfa774f75b6303edd98a0b150832b1e9a4fc226789630336a1` |
| `Papanikolaou_Christian_Faustian_Utopias.pdf` | 8,046,354 | `796dfd4b2ec8b1b46ed7e8189f68a7e76537b08458cd27361c4324a5ef37b1dc` |
| `West_Goethe_Faust_Nineteenth_Century_Music.pdf` | 177,116,293 | `ecec21a45fed98fd98ba8341ced10ecd93f1ad0d9096ff7d46317ed2a2757cc5` |

## Related items reviewed

| Items | Decision | Reason |
|---|---|---|
| `Goethe_Faust_II_German.txt` and `Goethe_Faust_I_II_English.pdf` | Not duplicates | They overlap at the work level, but one is a German transcription of *Faust II* and the other is a historical English translation of both parts with introduction and notes. Translation choices are analytically consequential. |
| `Papanikolaou_Christian_Faustian_Utopias.pdf` and the absent edited volume *Music in Goethe's Faust: Goethe's Faust in Music* | Not duplicates; partial-container relationship | The local file is one complete chapter plus two title pages, not the complete edited volume. The remainder of the volume is missing. |

## Bibliographic repetition outside `sources_raw/`

The older control files repeat records for Papanikolaou, Devutsky, Mullan, Batstone, West, Goethe, and many missing works. These are repeated metadata references, not duplicate full-text files. The local 2019 Batstone thesis and the bibliographic record for Batstone's 2023 monograph are related versions, but only the thesis is present; they must not be treated as interchangeable without a version comparison.
