/**
 * @jest-environment jsdom
 */
import {
    readAllPost,
    createDataPost,
    createDataAnswer,
    newPost,
    readOnePost,
    updatePost,
    deletePost
} from '../../src/firebase/timeline.js';

import { addDoc, collection } from '../../src/firebase/exports.js'

jest.mock('../../src/firebase/exports.js');

describe('createDataPost', () => {
    it('should be a function', () => {
        expect(typeof createDataPost).toBe('function');
    });
    it('should have receive an object with the right values', () => {
        const dataPost = createDataPost('testMessageContent', 'userTest');
        expect(dataPost.message).toBe('testMessageContent');
        expect(dataPost.user).toBe('userTest');
        expect(dataPost.image).toBe('');
        expect(dataPost.answers).toStrictEqual([]);
        expect(dataPost.likes).toBe(0);
    })
});

describe('createDataAnswer', () => {
    it('should be a function', () => {
        expect(typeof createDataPost).toBe('function');
    });
    it('should have receive an object with the right values', () => {
        const dataAnswer = createDataAnswer('testMessageContent', 'userTest'); 
        expect(dataAnswer.message).toBe('testMessageContent');
        expect(dataAnswer.user).toBe('userTest');
        expect(dataAnswer.likes).toBe(0);
    });
});

describe('newPost', () => {
    it('should be a function', () => {
        expect(typeof newPost).toBe('function');
    });
    it('should call another function one time', () => {
        newPost();
        expect(addDoc).toHaveBeenCalledTimes(1);
        expect(collection).toHaveBeenCalledTimes(1);
    })
})


