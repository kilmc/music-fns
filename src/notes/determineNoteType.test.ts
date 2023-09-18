import { describe, expect, it } from 'vitest';
import { determineNoteType } from './determineNoteType.js';

describe('determindNoteType', () => {
  it('can determine flat notes', () => {
    expect(determineNoteType('Bb')).toEqual('flat');
  });
  it('can determine sharp notes', () => {
    expect(determineNoteType('D#')).toEqual('sharp');
  });
  it('can determine natural notes', () => {
    expect(determineNoteType('D')).toEqual('natural');
  });
});
