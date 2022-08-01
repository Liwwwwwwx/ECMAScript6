['0','1','1','1'].map(parseInt)

// This actually simplifies to — (2nd parameter is the index) radix = 0 || 2 <= radix <=36
parseInt('0', 0); // 0 is treated as base 10
parseInt('1', 1); // NaN as radix < 2
parseInt('1', 2); // 1 in radix 2  
parseInt('1', 3); // 1 in radix 3