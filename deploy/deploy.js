"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var signer_1 = require("@taquito/signer");
var taquito_1 = require("@taquito/taquito");
var utils_1 = require("@taquito/utils");
var chalk_1 = __importDefault(require("chalk"));
var cli_spinner_1 = require("cli-spinner");
var dotenv = __importStar(require("dotenv"));
var advisor_json_1 = __importDefault(require("../compiled/advisor.json"));
var indice_json_1 = __importDefault(require("../compiled/indice.json"));
var metadata_json_1 = __importDefault(require("./metadata.json"));
dotenv.config({ path: __dirname + "/.env" });
var rpcUrl = process.env.RPC_URL;
var pk = process.env.PK || undefined;
var missingEnvVarLog = function (name) {
    return console.log(chalk_1["default"].redBright(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Missing "], ["Missing "]))) +
        chalk_1["default"].red.bold.underline(name) + chalk_1["default"].redBright(templateObject_2 || (templateObject_2 = __makeTemplateObject([" env var. Please add it in "], [" env var. Please add it in "]))) +
        chalk_1["default"].red.bold.underline("deploy/.env"));
};
var makeSpinnerOperation = function (operation, _a) {
    var loadingMessage = _a.loadingMessage, endMessage = _a.endMessage;
    return __awaiter(void 0, void 0, void 0, function () {
        var spinner, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    spinner = new cli_spinner_1.Spinner(loadingMessage);
                    spinner.start();
                    return [4 /*yield*/, operation];
                case 1:
                    result = _b.sent();
                    spinner.stop();
                    console.log("");
                    console.log(endMessage);
                    return [2 /*return*/, result];
            }
        });
    });
};
if (!pk && !rpcUrl) {
    console.log(chalk_1["default"].redBright(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Couldn't find env variables. Have you renamed "], ["Couldn't find env variables. Have you renamed "]))) + chalk_1["default"].red.bold.underline(templateObject_4 || (templateObject_4 = __makeTemplateObject(["deploy/.env.dist"], ["deploy/.env.dist"]))) + chalk_1["default"].redBright(templateObject_5 || (templateObject_5 = __makeTemplateObject([" to "], [" to "]))) +
        chalk_1["default"].red.bold.underline("deploy/.env"));
    process.exit(-1);
}
if (!pk) {
    missingEnvVarLog("PK");
    process.exit(-1);
}
if (!rpcUrl) {
    missingEnvVarLog("RPC_URL");
    process.exit(-1);
}
var Tezos = new taquito_1.TezosToolkit(rpcUrl);
var signer = new signer_1.InMemorySigner(pk);
Tezos.setProvider({ signer: signer });
var indice_address = process.env.INDICE_CONTRACT_ADDRESS || undefined;
var indice_initial_value = 4;
var advisor_initial_result = false;
var lambda_algorithm = '[{"prim": "PUSH", "args": [{"prim": "int"}, {"int": "10"}]}, {"prim": "SWAP"}, {"prim": "COMPARE"}, {"prim": "LT"}, {"prim": "IF", "args": [    [{"prim": "PUSH", "args": [{"prim": "bool"}, {"prim": "True"}]}],     [{"prim": "PUSH", "args": [{"prim": "bool"}, {"prim": "False"}]}]    ]}]';
function deploy() {
    return __awaiter(this, void 0, void 0, function () {
        var indice_store, advisor_store, indice_originated, contract, advisor_originated, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    indice_store = indice_initial_value;
                    advisor_store = {
                        metadata: taquito_1.MichelsonMap.fromLiteral({
                            "": (0, utils_1.buf2hex)(Buffer.from("tezos-storage:contents")),
                            contents: (0, utils_1.buf2hex)(Buffer.from(JSON.stringify(metadata_json_1["default"])))
                        }),
                        indiceAddress: indice_address,
                        algorithm: JSON.parse(lambda_algorithm),
                        result: advisor_initial_result
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    if (!(indice_address === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, makeSpinnerOperation(Tezos.contract.originate({
                            code: indice_json_1["default"],
                            storage: indice_store
                        }), {
                            loadingMessage: chalk_1["default"].yellowBright(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Deploying "], ["Deploying "]))) + chalk_1["default"].yellow.bold(templateObject_7 || (templateObject_7 = __makeTemplateObject(["INDICE"], ["INDICE"]))) + chalk_1["default"].yellowBright(templateObject_8 || (templateObject_8 = __makeTemplateObject([" contract"], [" contract"]))),
                            endMessage: chalk_1["default"].green(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Contract deployed!"], ["Contract deployed!"])))
                        })];
                case 2:
                    indice_originated = _a.sent();
                    return [4 /*yield*/, makeSpinnerOperation(indice_originated.contract(), {
                            loadingMessage: chalk_1["default"].yellowBright(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Waiting for "], ["Waiting for "]))) + chalk_1["default"].yellow.bold(templateObject_11 || (templateObject_11 = __makeTemplateObject(["INDICE"], ["INDICE"]))) + chalk_1["default"].yellowBright(templateObject_12 || (templateObject_12 = __makeTemplateObject([" to be confirmed at: "], [" to be confirmed at: "]))) +
                                chalk_1["default"].yellow.bold(indice_originated.contractAddress),
                            endMessage: chalk_1["default"].green(templateObject_13 || (templateObject_13 = __makeTemplateObject(["INDICE confirmed!"], ["INDICE confirmed!"])))
                        })];
                case 3:
                    contract = _a.sent();
                    indice_address = contract.address;
                    advisor_store.indiceAddress = indice_address;
                    _a.label = 4;
                case 4: return [4 /*yield*/, makeSpinnerOperation(Tezos.contract.originate({
                        code: advisor_json_1["default"],
                        storage: advisor_store
                    }), {
                        loadingMessage: chalk_1["default"].yellowBright(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Deploying "], ["Deploying "]))) + chalk_1["default"].yellow.bold(templateObject_15 || (templateObject_15 = __makeTemplateObject(["ADVISOR"], ["ADVISOR"]))) + chalk_1["default"].yellowBright(templateObject_16 || (templateObject_16 = __makeTemplateObject([" contract"], [" contract"]))),
                        endMessage: chalk_1["default"].green(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Contract deployed!"], ["Contract deployed!"])))
                    })];
                case 5:
                    advisor_originated = _a.sent();
                    return [4 /*yield*/, makeSpinnerOperation(advisor_originated.contract(), {
                            loadingMessage: chalk_1["default"].yellowBright(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Waiting for "], ["Waiting for "]))) + chalk_1["default"].yellow.bold(templateObject_19 || (templateObject_19 = __makeTemplateObject(["ADVISOR"], ["ADVISOR"]))) + chalk_1["default"].yellowBright(templateObject_20 || (templateObject_20 = __makeTemplateObject([" to be confirmed at: "], [" to be confirmed at: "]))) +
                                chalk_1["default"].yellow.bold(advisor_originated.contractAddress),
                            endMessage: chalk_1["default"].green(templateObject_21 || (templateObject_21 = __makeTemplateObject(["ADVISOR confirmed!"], ["ADVISOR confirmed!"])))
                        })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.log("");
                    console.log(chalk_1["default"].redBright(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Error during deployment:"], ["Error during deployment:"]))));
                    console.log(error_1);
                    return [2 /*return*/, process.exit(1)];
                case 8: return [2 /*return*/];
            }
        });
    });
}
deploy();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;
