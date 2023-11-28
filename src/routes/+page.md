---
title: 'Indexed references'
---
<script lang="ts">
    import { page } from '$app/stores';
</script>

This project contains pages with identical __+page.server.ts__ files. These expose the following list of image references (_imgurl_ is an imported picture),
Be aware that the error behaviour is the same if this data would be provided in a __script__ element within the markdown page!

```javascript
    {
        "images": [
            {
                "src": imgurl
            },
            {
                "src": imgurl
            }
        ]
    }
```

|Image Reference|Status|
|---------------|------|
|[```<img src="{$page.data.images[0].src}"/>```](./working)|Works|
|[```![ALT]({$page.data.images[0].src})```](./notworking)|Fails as the square brackets are being escaped somewhere along the processing pipeline.|
|[```![ALT]({$page.data.images.at(0).src})```](./working-workaround)|Works. Accesses the element using the function Array.at|

