import { InMemoryDbService } from 'angular-in-memory-web-api'; // "angular-in-memory-web-api": "0.8.0", package.json

export class ItemData implements InMemoryDbService {

    createDb() {
        let items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' }
        ];

        let items2 = [
            { id: 1, name: 'Item2 1' },
            { id: 2, name: 'Item2 2' },
            { id: 3, name: 'Item2 3' },
            { id: 4, name: 'Item2 4' }
        ];

        return { items, items2 };
    }
}