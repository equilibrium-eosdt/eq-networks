export declare const serializeFunction: <T extends Function>(fn: T) => {
    func$: string;
};
export declare const deserializeFunction: ({ func$ }: {
    func$: string;
}) => any;
