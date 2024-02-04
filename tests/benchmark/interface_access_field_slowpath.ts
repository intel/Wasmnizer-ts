/*
 * Copyright (C) 2023 Intel Corporation.  All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

interface Foo {
    x: number;
    y: boolean;
    z?: string;
}

class Bar {
    y = false;
    x = 0;
}
const size = 1e6;
const expect = 499998500001;
const f: Foo = new Bar();
let res = 0;

export function main() {
    for (let i = 0; i < size; i++) {
        res += f.x;
        f.x = i;
    }
    if (res !== expect) {
        console.log(
            'Validate result error in interface access field (slow path)',
        );
    }
    return res;
}
