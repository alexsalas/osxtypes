// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/LangAnalysis.framework/Headers/Dictionary.h
function Dictionary_h(lib) {
    AEDataModel_h.call(this, lib);
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);

    if (this._DICTIONARY_H)
        return;
    this._DICTIONARY_H = true;

    this.kDictionaryFileType = 1684628340;
    this.kDCMDictionaryHeaderSignature = 1684628340;
    this.kDCMDictionaryHeaderVersion = 2;
    this.kDCMAnyFieldTag = 707406378;
    this.kDCMAnyFieldType = 707406378;
    this.keyDCMFieldTag = 1718903143;
    this.keyDCMFieldType = 1718909296;
    this.keyDCMMaxRecordSize = 1836217210;
    this.keyDCMFieldAttributes = 1717662834;
    this.keyDCMFieldDefaultData = 1717855590;
    this.keyDCMFieldName = 1718509933;
    this.keyDCMFieldFindMethods = 1717988964;
    this.typeDCMFieldAttributes = 1717662834;
    this.typeDCMFindMethod = 1718449256;
    this.kDCMIndexedFieldMask = 1;
    this.kDCMRequiredFieldMask = 2;
    this.kDCMIdentifyFieldMask = 4;
    this.kDCMFixedSizeFieldMask = 8;
    this.kDCMHiddenFieldMask = -2147483648;
    this.DCMFieldAttributes = this.OptionBits;
    this.pDCMAccessMethod = 1634563172;
    this.pDCMPermission = 1885696621;
    this.pDCMListing = 1818850164;
    this.pDCMMaintenance = 1836346979;
    this.pDCMLocale = 1819239276;
    this.pDCMClass = 1885564019;
    this.pDCMCopyright = 1768842863;
    this.kDCMReadOnlyDictionary = 0;
    this.kDCMReadWriteDictionary = 1;
    this.kDCMAllowListing = 0;
    this.kDCMProhibitListing = 1;
    this.kDCMUserDictionaryClass = 0;
    this.kDCMSpecificDictionaryClass = 1;
    this.kDCMBasicDictionaryClass = 2;
    this.kDCMFindMethodExactMatch = 1025515552;
    this.kDCMFindMethodBeginningMatch = 1650947956;
    this.kDCMFindMethodContainsMatch = 1668247156;
    this.kDCMFindMethodEndingMatch = 1701733491;
    this.kDCMFindMethodForwardTrie = 1718907497;
    this.kDCMFindMethodBackwardTrie = 1651798633;
    this.DCMFindMethod = this.OSType;
    this.kDCMCanUseFileDictionaryMask = 1;
    this.kDCMCanUseMemoryDictionaryMask = 2;
    this.kDCMCanStreamDictionaryMask = 4;
    this.kDCMCanHaveMultipleIndexMask = 8;
    this.kDCMCanModifyDictionaryMask = 16;
    this.kDCMCanCreateDictionaryMask = 32;
    this.kDCMCanAddDictionaryFieldMask = 64;
    this.kDCMCanUseTransactionMask = 128;
    this.DCMAccessMethodFeature = this.OptionBits;
    this.DCMUniqueID = this.UInt32;
    this.OpaqueDCMObjectID = new ctypes.StructType("OpaqueDCMObjectID");
    this.DCMObjectID = this.OpaqueDCMObjectID.ptr;
    this.DCMAccessMethodID = this.DCMObjectID;
    this.DCMDictionaryID = this.DCMObjectID;
    this.OpaqueDCMObjectRef = new ctypes.StructType("OpaqueDCMObjectRef");
    this.DCMObjectRef = this.OpaqueDCMObjectRef.ptr;
    this.DCMDictionaryRef = this.DCMObjectRef;
    this.DCMDictionaryStreamRef = this.DCMObjectRef;
    this.OpaqueDCMObjectIterator = new ctypes.StructType("OpaqueDCMObjectIterator");
    this.DCMObjectIterator = this.OpaqueDCMObjectIterator.ptr;
    this.DCMAccessMethodIterator = this.DCMObjectIterator;
    this.DCMDictionaryIterator = this.DCMObjectIterator;
    this.OpaqueDCMFoundRecordIterator = new ctypes.StructType("OpaqueDCMFoundRecordIterator");
    this.DCMFoundRecordIterator = this.OpaqueDCMFoundRecordIterator.ptr;
    this.DCMFieldTag = this.DescType;
    this.DCMFieldType = this.DescType;
    this.DCMDictionaryHeader = new ctypes.StructType("DCMDictionaryHeader", [{headerSignature: this.FourCharCode}, {headerVersion: this.UInt32}, {headerSize: this.UInt32}, {accessMethod: this.Str63}]);
    this.DCMProgressFilterProcPtr = new ctypes.FunctionType(ctypes.default_abi, this.Boolean, [this.Boolean, this.UInt16, this.UInt32]).ptr;
    this.DCMProgressFilterUPP = this.DCMProgressFilterProcPtr;
    this.DCMLibraryVersion = lib.declare("DCMLibraryVersion", ctypes.default_abi, this.UInt32);
    this.DCMNewDictionary = lib.declare("DCMNewDictionary", ctypes.default_abi, this.OSStatus, this.DCMAccessMethodID, this.FSSpec.ptr, this.ScriptCode, this.AEDesc.ptr, this.Boolean, this.ItemCount, this.DCMDictionaryID.ptr);
    this.DCMDeriveNewDictionary = lib.declare("DCMDeriveNewDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.FSSpec.ptr, this.ScriptCode, this.Boolean, this.ItemCount, this.DCMDictionaryID.ptr);
    this.DCMDeleteDictionary = lib.declare("DCMDeleteDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID);
    this.DCMRegisterDictionaryFile = lib.declare("DCMRegisterDictionaryFile", ctypes.default_abi, this.OSStatus, this.FSSpec.ptr, this.DCMDictionaryID.ptr);
    this.DCMUnregisterDictionary = lib.declare("DCMUnregisterDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID);
    this.DCMOpenDictionary = lib.declare("DCMOpenDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.ByteCount, this.ConstLogicalAddress, this.DCMDictionaryRef.ptr);
    this.DCMCloseDictionary = lib.declare("DCMCloseDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef);
    this.DCMGetDictionaryWriteAccess = lib.declare("DCMGetDictionaryWriteAccess", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.Duration);
    this.DCMReleaseDictionaryWriteAccess = lib.declare("DCMReleaseDictionaryWriteAccess", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.Boolean);
    this.DCMFindRecords = lib.declare("DCMFindRecords", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMFindMethod, this.ItemCount, this.DCMFieldTag.ptr, this.ItemCount, this.ItemCount, this.DCMFoundRecordIterator.ptr);
    this.DCMCountRecordIterator = lib.declare("DCMCountRecordIterator", ctypes.default_abi, this.ItemCount, this.DCMFoundRecordIterator);
    this.DCMIterateFoundRecord = lib.declare("DCMIterateFoundRecord", ctypes.default_abi, this.OSStatus, this.DCMFoundRecordIterator, this.ByteCount, this.ByteCount.ptr, this.LogicalAddress, this.DCMUniqueID.ptr, this.AEDesc.ptr);
    this.DCMDisposeRecordIterator = lib.declare("DCMDisposeRecordIterator", ctypes.default_abi, this.OSStatus, this.DCMFoundRecordIterator);
    this.DCMCountRecord = lib.declare("DCMCountRecord", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.ItemCount.ptr);
    this.DCMGetRecordSequenceNumber = lib.declare("DCMGetRecordSequenceNumber", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMUniqueID, this.ItemCount.ptr);
    this.DCMGetNthRecord = lib.declare("DCMGetNthRecord", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ItemCount, this.ByteCount, this.ByteCount.ptr, this.LogicalAddress, this.DCMUniqueID.ptr);
    this.DCMGetNextRecord = lib.declare("DCMGetNextRecord", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMUniqueID, this.ByteCount, this.ByteCount.ptr, this.LogicalAddress, this.DCMUniqueID.ptr);
    this.DCMGetPrevRecord = lib.declare("DCMGetPrevRecord", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMUniqueID, this.ByteCount, this.ByteCount.ptr, this.LogicalAddress, this.DCMUniqueID.ptr);
    this.DCMGetFieldData = lib.declare("DCMGetFieldData", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMUniqueID, this.ItemCount, this.DCMFieldTag.ptr, this.AEDesc.ptr);
    this.DCMSetFieldData = lib.declare("DCMSetFieldData", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMUniqueID, this.AEDesc.ptr);
    this.DCMAddRecord = lib.declare("DCMAddRecord", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.Boolean, this.AEDesc.ptr, this.DCMUniqueID.ptr);
    this.DCMDeleteRecord = lib.declare("DCMDeleteRecord", ctypes.default_abi, this.OSStatus, this.DCMDictionaryRef, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress, this.DCMUniqueID);
    this.DCMReorganizeDictionary = lib.declare("DCMReorganizeDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.ItemCount, this.DCMProgressFilterUPP, this.UInt32);
    this.DCMCompactDictionary = lib.declare("DCMCompactDictionary", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.DCMProgressFilterUPP, this.UInt32);
    this.DCMGetFileFromDictionaryID = lib.declare("DCMGetFileFromDictionaryID", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.FSSpec.ptr);
    this.DCMGetDictionaryIDFromFile = lib.declare("DCMGetDictionaryIDFromFile", ctypes.default_abi, this.OSStatus, this.FSSpec.ptr, this.DCMDictionaryID.ptr);
    this.DCMGetDictionaryIDFromRef = lib.declare("DCMGetDictionaryIDFromRef", ctypes.default_abi, this.DCMDictionaryID, this.DCMDictionaryRef);
    this.DCMGetDictionaryFieldInfo = lib.declare("DCMGetDictionaryFieldInfo", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.DCMFieldTag, this.AEDesc.ptr);
    this.DCMGetDictionaryProperty = lib.declare("DCMGetDictionaryProperty", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.DCMFieldTag, this.ByteCount, this.ByteCount.ptr, this.LogicalAddress);
    this.DCMSetDictionaryProperty = lib.declare("DCMSetDictionaryProperty", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.DCMFieldTag, this.ByteCount, this.ConstLogicalAddress);
    this.DCMGetDictionaryPropertyList = lib.declare("DCMGetDictionaryPropertyList", ctypes.default_abi, this.OSStatus, this.DCMDictionaryID, this.ItemCount, this.ItemCount.ptr, this.DCMFieldTag.ptr);
    this.DCMCreateDictionaryIterator = lib.declare("DCMCreateDictionaryIterator", ctypes.default_abi, this.OSStatus, this.DCMDictionaryIterator.ptr);
    this.DCMCreateAccessMethodIterator = lib.declare("DCMCreateAccessMethodIterator", ctypes.default_abi, this.OSStatus, this.DCMAccessMethodIterator.ptr);
    this.DCMCountObjectIterator = lib.declare("DCMCountObjectIterator", ctypes.default_abi, this.ItemCount, this.DCMObjectIterator);
    this.DCMIterateObject = lib.declare("DCMIterateObject", ctypes.default_abi, this.OSStatus, this.DCMObjectIterator, this.DCMObjectID.ptr);
    this.DCMResetObjectIterator = lib.declare("DCMResetObjectIterator", ctypes.default_abi, this.OSStatus, this.DCMObjectIterator);
    this.DCMDisposeObjectIterator = lib.declare("DCMDisposeObjectIterator", ctypes.default_abi, this.OSStatus, this.DCMObjectIterator);
    this.DCMGetAccessMethodIDFromName = lib.declare("DCMGetAccessMethodIDFromName", ctypes.default_abi, this.OSStatus, this.ConstStr63Param, this.DCMAccessMethodID.ptr);
    this.DCMCreateFieldInfoRecord = lib.declare("DCMCreateFieldInfoRecord", ctypes.default_abi, this.OSStatus, this.DescType, this.DescType, this.ByteCount, this.DCMFieldAttributes, this.AEDesc.ptr, this.ItemCount, this.DCMFindMethod.ptr, this.AEDesc.ptr);
    this.DCMGetFieldTagAndType = lib.declare("DCMGetFieldTagAndType", ctypes.default_abi, this.OSStatus, this.AEDesc.ptr, this.DCMFieldTag.ptr, this.DCMFieldType.ptr);
    this.DCMGetFieldMaxRecordSize = lib.declare("DCMGetFieldMaxRecordSize", ctypes.default_abi, this.OSStatus, this.AEDesc.ptr, this.ByteCount.ptr);
    this.DCMGetFieldAttributes = lib.declare("DCMGetFieldAttributes", ctypes.default_abi, this.OSStatus, this.AEDesc.ptr, this.DCMFieldAttributes.ptr);
    this.DCMGetFieldDefaultData = lib.declare("DCMGetFieldDefaultData", ctypes.default_abi, this.OSStatus, this.AEDesc.ptr, this.DescType, this.AEDesc.ptr);
    this.DCMGetFieldFindMethods = lib.declare("DCMGetFieldFindMethods", ctypes.default_abi, this.OSStatus, this.AEDesc.ptr, this.ItemCount, this.DCMFindMethod.ptr, this.ItemCount.ptr);
    // Dropping inline function 'DCMDictionaryManagerAvailable'.
    this.kMaxYomiLengthInAppleJapaneseDictionary = 40;
    this.kMaxKanjiLengthInAppleJapaneseDictionary = 64;
    this.kDCMJapaneseYomiTag = 2037345641;
    this.kDCMJapaneseHyokiTag = 1752788843;
    this.kDCMJapaneseHinshiTag = 1751740019;
    this.kDCMJapaneseWeightTag = 1751740004;
    this.kDCMJapanesePhoneticTag = 1752461166;
    this.kDCMJapaneseAccentTag = 1633906292;
    this.kDCMJapaneseOnKunReadingTag = 1332628334;
    this.kDCMJapaneseFukugouInfoTag = 1718971253;
    this.kDCMJapaneseYomiType = 1970567284;
    this.kDCMJapaneseHyokiType = 1970567284;
    this.kDCMJapaneseHinshiType = 1751740019;
    this.kDCMJapaneseWeightType = 1936224114;
    this.kDCMJapanesePhoneticType = 1970567284;
    this.kDCMJapaneseAccentType = 1652126821;
    this.kDCMJapaneseOnKunReadingType = 1970567284;
    this.kDCMJapaneseFukugouInfoType = 1718971253;
}

// Based on /System/Library/Frameworks/ApplicationServices.framework/Frameworks/LangAnalysis.framework/Headers/LanguageAnalysis.h
function LanguageAnalysis_h(lib) {
    Files_h.call(this, lib);
    MacTypes_h.call(this, lib);
    TextCommon_h.call(this, lib);
    AEDataModel_h.call(this, lib);
    Dictionary_h.call(this, lib);

    if (this._LANGUAGEANALYSIS_H)
        return;
    this._LANGUAGEANALYSIS_H = true;

    this.OpaqueLAEnvironmentRef = new ctypes.StructType("OpaqueLAEnvironmentRef");
    this.LAEnvironmentRef = this.OpaqueLAEnvironmentRef.ptr;
    this.OpaqueLAContextRef = new ctypes.StructType("OpaqueLAContextRef");
    this.LAContextRef = this.OpaqueLAContextRef.ptr;
    this.LAPropertyKey = this.AEKeyword;
    this.LAPropertyType = this.DescType;
    this.LAMorphemeRec = new ctypes.StructType("LAMorphemeRec", [{sourceTextLength: this.UInt32}, {sourceTextPtr: this.LogicalAddress}, {morphemeTextLength: this.UInt32}, {morphemeTextPtr: this.LogicalAddress}, {partOfSpeech: this.UInt32}]);
    this.LAMorphemesArray = new ctypes.StructType("LAMorphemesArray", [{morphemesCount: this.ItemCount}, {processedTextLength: this.UInt32}, {morphemesTextLength: this.UInt32}, {morphemes: this.LAMorphemeRec.array(1)}]);
    this.LAMorphemesArrayPtr = this.LAMorphemesArray.ptr;
    this.kLAMorphemesArrayVersion = 0;
    this.LAMorphemeBundle = this.AERecord;
    this.LAMorphemePath = this.AERecord;
    this.LAMorpheme = this.AERecord;
    this.LAHomograph = this.AERecord;
    this.keyAELAMorphemeBundle = 1819108962;
    this.keyAELAMorphemePath = 1819108976;
    this.keyAELAMorpheme = 1819108974;
    this.keyAELAHomograph = 1819108968;
    this.typeLAMorphemeBundle = 1919247215;
    this.typeLAMorphemePath = 1919247215;
    this.typeLAMorpheme = 1818850164;
    this.typeLAHomograph = 1818850164;
    this.keyAEMorphemePartOfSpeechCode = 1818324323;
    this.keyAEMorphemeTextRange = 1818324340;
    this.typeAEMorphemePartOfSpeechCode = 1818324323;
    this.typeAEMorphemeTextRange = 1818324340;
    this.MorphemePartOfSpeech = this.UInt32;
    this.MorphemeTextRange = new ctypes.StructType("MorphemeTextRange", [{sourceOffset: this.UInt32}, {length: this.UInt32}]);
    this.kLAEndOfSourceTextMask = 1;
    this.kLADefaultEdge = 0;
    this.kLAFreeEdge = 1;
    this.kLAIncompleteEdge = 2;
    this.kLAAllMorphemes = 0;
    this.LALibraryVersion = lib.declare("LALibraryVersion", ctypes.default_abi, this.UInt32);
    this.LATextToMorphemes = lib.declare("LATextToMorphemes", ctypes.default_abi, this.OSStatus, this.LAContextRef, this.TextEncoding, this.ByteCount, this.ConstLogicalAddress, this.ByteCount, this.OptionBits, this.UInt32, this.ByteCount.ptr, this.LAMorphemesArrayPtr);
    this.LAOpenAnalysisContext = lib.declare("LAOpenAnalysisContext", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, this.LAContextRef.ptr);
    this.LACloseAnalysisContext = lib.declare("LACloseAnalysisContext", ctypes.default_abi, this.OSStatus, this.LAContextRef);
    this.LAGetEnvironmentList = lib.declare("LAGetEnvironmentList", ctypes.default_abi, this.OSStatus, this.UInt32, this.UInt32.ptr, this.LAEnvironmentRef.ptr);
    this.LAGetEnvironmentName = lib.declare("LAGetEnvironmentName", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, ctypes.unsigned_char.ptr);
    this.LAGetEnvironmentRef = lib.declare("LAGetEnvironmentRef", ctypes.default_abi, this.OSStatus, this.ConstStr63Param, this.LAEnvironmentRef.ptr);
    this.LACreateCustomEnvironment = lib.declare("LACreateCustomEnvironment", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, this.ConstStr63Param, this.Boolean, this.LAEnvironmentRef.ptr);
    this.LADeleteCustomEnvironment = lib.declare("LADeleteCustomEnvironment", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef);
    this.LAOpenDictionary = lib.declare("LAOpenDictionary", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, this.FSSpec.ptr);
    this.LACloseDictionary = lib.declare("LACloseDictionary", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, this.FSSpec.ptr);
    this.LAListAvailableDictionaries = lib.declare("LAListAvailableDictionaries", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, this.ItemCount, this.ItemCount.ptr, this.FSSpec.ptr, this.Boolean.ptr);
    this.LAAddNewWord = lib.declare("LAAddNewWord", ctypes.default_abi, this.OSStatus, this.LAEnvironmentRef, this.FSSpec.ptr, this.AEDesc.ptr);
    this.LAMorphemeAnalysis = lib.declare("LAMorphemeAnalysis", ctypes.default_abi, this.OSStatus, this.LAContextRef, this.ConstUniCharArrayPtr, this.UniCharCount, this.LAMorphemePath.ptr, this.LAMorphemePath.ptr, this.ItemCount, this.LAMorphemeBundle.ptr);
    this.LAContinuousMorphemeAnalysis = lib.declare("LAContinuousMorphemeAnalysis", ctypes.default_abi, this.OSStatus, this.LAContextRef, this.ConstUniCharArrayPtr, this.UniCharCount, this.Boolean, this.LAMorphemePath.ptr, this.LAMorphemePath.ptr, this.Boolean.ptr);
    this.LAGetMorphemes = lib.declare("LAGetMorphemes", ctypes.default_abi, this.OSStatus, this.LAContextRef, this.LAMorphemePath.ptr);
    this.LAShiftMorphemes = lib.declare("LAShiftMorphemes", ctypes.default_abi, this.OSStatus, this.LAContextRef, this.ItemCount, this.LAMorphemePath.ptr, this.UniCharCount.ptr);
    this.LAResetAnalysis = lib.declare("LAResetAnalysis", ctypes.default_abi, this.OSStatus, this.LAContextRef);
    // Dropping inline function 'LALanguageAnalysisAvailable'.
    this.kAppleJapaneseDictionarySignature = 1785487726;
    this.kMaxInputLengthOfAppleJapaneseEngine = 200;
    this.JapanesePartOfSpeech = this.MorphemePartOfSpeech;
    this.HomographWeight = this.UInt16;
    this.HomographAccent = this.UInt8;
    this.keyAEHomographDicInfo = 1818323044;
    this.keyAEHomographWeight = 1818323063;
    this.keyAEHomographAccent = 1818323041;
    this.typeAEHomographDicInfo = 1818323044;
    this.typeAEHomographWeight = 1936224114;
    this.typeAEHomographAccent = 1818323041;
    this.HomographDicInfoRec = new ctypes.StructType("HomographDicInfoRec", [{dictionaryID: this.DCMDictionaryID}, {uniqueID: this.DCMUniqueID}]);
    this.kLASpeechRoughClassMask = 61440;
    this.kLASpeechMediumClassMask = 65280;
    this.kLASpeechStrictClassMask = 65520;
    this.kLASpeechKatsuyouMask = 15;
    this.kLASpeechMeishi = 0;
    this.kLASpeechFutsuuMeishi = 0;
    this.kLASpeechJinmei = 256;
    this.kLASpeechJinmeiSei = 272;
    this.kLASpeechJinmeiMei = 288;
    this.kLASpeechChimei = 512;
    this.kLASpeechSetsubiChimei = 528;
    this.kLASpeechSoshikimei = 768;
    this.kLASpeechKoyuuMeishi = 1024;
    this.kLASpeechSahenMeishi = 1280;
    this.kLASpeechKeidouMeishi = 1536;
    this.kLASpeechRentaishi = 4096;
    this.kLASpeechFukushi = 8192;
    this.kLASpeechSetsuzokushi = 12288;
    this.kLASpeechKandoushi = 16384;
    this.kLASpeechDoushi = 20480;
    this.kLASpeechGodanDoushi = 20480;
    this.kLASpeechKagyouGodan = 20480;
    this.kLASpeechSagyouGodan = 20496;
    this.kLASpeechTagyouGodan = 20512;
    this.kLASpeechNagyouGodan = 20528;
    this.kLASpeechMagyouGodan = 20544;
    this.kLASpeechRagyouGodan = 20560;
    this.kLASpeechWagyouGodan = 20576;
    this.kLASpeechGagyouGodan = 20592;
    this.kLASpeechBagyouGodan = 20608;
    this.kLASpeechIchidanDoushi = 20736;
    this.kLASpeechKahenDoushi = 20992;
    this.kLASpeechSahenDoushi = 21248;
    this.kLASpeechZahenDoushi = 21504;
    this.kLASpeechKeiyoushi = 24576;
    this.kLASpeechKeiyoudoushi = 28672;
    this.kLASpeechSettougo = 32768;
    this.kLASpeechSuujiSettougo = 33024;
    this.kLASpeechSetsubigo = 36864;
    this.kLASpeechJinmeiSetsubigo = 37120;
    this.kLASpeechChimeiSetsubigo = 37376;
    this.kLASpeechSoshikimeiSetsubigo = 37632;
    this.kLASpeechSuujiSetsubigo = 37888;
    this.kLASpeechMuhinshi = 40960;
    this.kLASpeechTankanji = 40960;
    this.kLASpeechKigou = 41216;
    this.kLASpeechKuten = 41232;
    this.kLASpeechTouten = 41248;
    this.kLASpeechSuushi = 41472;
    this.kLASpeechDokuritsugo = 41728;
    this.kLASpeechSeiku = 41984;
    this.kLASpeechJodoushi = 45056;
    this.kLASpeechJoshi = 49152;
    this.kLASpeechKatsuyouGokan = 1;
    this.kLASpeechKatsuyouMizen = 2;
    this.kLASpeechKatsuyouRenyou = 3;
    this.kLASpeechKatsuyouSyuushi = 4;
    this.kLASpeechKatsuyouRentai = 5;
    this.kLASpeechKatsuyouKatei = 6;
    this.kLASpeechKatsuyouMeirei = 7;
}

Components.utils.import("resource://gre/modules/ctypes.jsm");
Components.utils.import("resource://osxtypes/CarbonCore.jsm");
Components.utils.import("resource://osxtypes/MacTypes.jsm");
Components.utils.import("resource://osxtypes/AE.jsm");

const EXPORTED_SYMBOLS = ["LangAnalysis", "Dictionary_h", "LanguageAnalysis_h"];

function LangAnalysis() {
    let libpath = "/System/Library/Frameworks/ApplicationServices.framework/Frameworks/LangAnalysis.framework/LangAnalysis";
    let library = ctypes.open(libpath);
    this.close = function() {
        library.close();
    };
    let lib = {
        declare: function() {
            try {
                return library.declare.apply(library, arguments);
            } catch (ex) {
                dump("Failed to declare " + arguments[0] + "\n");
                return null;
            }
        }
    };

    Dictionary_h.call(this, lib);
    LanguageAnalysis_h.call(this, lib);
}
