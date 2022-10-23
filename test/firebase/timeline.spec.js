import {
    readAllPost,
    createDataPost,
    createDataAnswer,
    newPost,
    readOnePost,
    updatePost,
    deletePost
} from '../../src/firebase/timeline.js';

describe('createDataPost') = () => {
    it('should be a function', () => {
        expect(typeof createDataPost).toBe('function');
    });
};


