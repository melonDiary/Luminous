// @generated by protobuf-ts 2.9.0 with parameter output_javascript_es2019
// @generated from protobuf file "protos/searchAll.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Item
 */
export interface Item {
    /**
     * @generated from protobuf field: string linktype = 4;
     */
    linktype: string;
}
/**
 * @generated from protobuf message SearchAll
 */
export interface SearchAll {
    /**
     * @generated from protobuf field: repeated Item items = 4;
     */
    items: Item[];
}
declare class Item$Type extends MessageType<Item> {
    constructor();
    create(value?: PartialMessage<Item>): Item;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Item): Item;
    internalBinaryWrite(message: Item, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Item
 */
export declare const Item: Item$Type;
declare class SearchAll$Type extends MessageType<SearchAll> {
    constructor();
    create(value?: PartialMessage<SearchAll>): SearchAll;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchAll): SearchAll;
    internalBinaryWrite(message: SearchAll, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message SearchAll
 */
export declare const SearchAll: SearchAll$Type;
export {};
