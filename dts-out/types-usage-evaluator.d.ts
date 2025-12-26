import * as ts from 'typescript';
export declare class TypesUsageEvaluator {
    private readonly typeChecker;
    private readonly nodesParentsMap;
    private readonly usageResultCache;
    constructor(files: ts.SourceFile[], typeChecker: ts.TypeChecker);
    isSymbolUsedBySymbol(symbol: ts.Symbol, by: ts.Symbol): boolean;
    getSymbolsUsingSymbol(symbol: ts.Symbol): Set<ts.Symbol> | null;
    private isSymbolUsedBySymbolImpl;
    private setUsageCacheValue;
    private computeUsages;
    private computeUsageForNode;
    private addUsagesForExportAssignment;
    private addUsagesForNamespacedModule;
    private addExportsToSymbol;
    private computeUsagesRecursively;
    private addUsages;
    private getSymbol;
    private getNodeOwnSymbol;
    private getActualSymbol;
}
