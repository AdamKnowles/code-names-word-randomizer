const list = ['ATM', 'CD', 'SUV', 'TV', 'aardvark', 'abacus', 'abbey', 'abbreviation', 'abdomen', 'ability', 'abnormality', 'abolishment', 'abortion', 'abrogation', 'absence', 'abundance', 'abuse', 'academics', 'academy', 'accelerant', 'accelerator', 'accent', 'acceptance', 'access', 'accessory', 'accident', 'accommodation', 'accompanist', 'accomplishment', 'accord', 'accordance', 'accordion', 'account', 'accountability', 'accountant', 'accounting', 'accuracy', 'accusation', 'acetate', 'achievement', 'achiever', 'acid', 'acknowledgment', 'acorn', 'acoustics', 'acquaintance', 'acquisition', 'acre', 'acrylic', 'act', 'action', 'activation', 'activist', 'activity', 'actor', 'actress', 'acupuncture', 'ad', 'adaptation', 'adapter', 'addiction', 'addition', 'address', 'adjective', 'adjustment', 'admin', 'administration', 'administrator', 'admire', 'admission', 'adobe', 'adoption', 'adrenalin', 'adrenaline', 'adult', 'adulthood', 'advance', 'advancement', 'advantage', 'advent', 'adverb', 'advertisement', 'advertising', 'advice', 'adviser', 'advocacy', 'advocate', 'affair', 'affect', 'affidavit', 'affiliate', 'affinity', 'afoul', 'afterlife', 'aftermath', 'afternoon', 'aftershave', 'aftershock', 'afterthought', 'age', 'agency', 'agenda', 'agent', 'aggradation', 'aggression', 'aglet', 'agony', 'agreement', 'agriculture', 'aid', 'aide', 'aim', 'air', 'airbag', 'airbus', 'aircraft', 'airfare', 'airfield', 'airforce', 'airline', 'airmail', 'airman', 'airplane', 'airport', 'airship', 'airspace', 'alarm', 'alb', 'albatross', 'album', 'alcohol', 'alcove', 'alder', 'ale', 'alert', 'alfalfa', 'algebra', 'algorithm', 'alias', 'alibi', 'alien', 'allegation', 'allergist', 'alley', 'alliance', 'alligator', 'allocation', 'allowance', 'alloy', 'alluvium', 'almanac', 'almighty', 'almond', 'alpaca', 'alpenglow', 'alpenhorn', 'alpha', 'alphabet', 'altar', 'alteration', 'alternative', 'altitude', 'alto', 'aluminium', 'aluminum', 'amazement', 'amazon', 'ambassador', 'amber', 'ambience', 'ambiguity', 'ambition', 'ambulance', 'amendment', 'amenity', 'ammunition', 'amnesty', 'amount', 'amusement', 'anagram', 'analgesia', 'analog', 'analogue', 'analogy', 'analysis', 'analyst', 'analytics', 'anarchist', 'anarchy', 'anatomy', 'ancestor', 'anchovy', 'android', 'anesthesiologist', 'anesthesiology', 'angel', 'anger', 'angina', 'angiosperm', 'angle', 'angora', 'angstrom', 'anguish', 'animal', 'anime', 'anise', 'ankle', 'anklet', 'anniversary', 'announcement', 'annual', 'anorak', 'answer', 'ant', 'anteater', 'antecedent', 'antechamber', 'antelope', 'antennae', 'anterior', 'anthropology', 'antibody', 'anticipation', 'anticodon', 'antigen', 'antique', 'antiquity', 'antler', 'antling', 'anxiety', 'anybody', 'anyone', 'anything', 'anywhere', 'apartment', 'ape', 'aperitif', 'apology', 'app', 'apparatus', 'apparel', 'appeal', 'appearance', 'appellation', 'appendix', 'appetiser', 'appetite', 'appetizer', 'applause', 'apple', 'applewood', 'appliance', 'application', 'appointment', 'appreciation', 'apprehension', 'approach', 'appropriation', 'approval', 'apricot', 'apron', 'apse', 'aquarium', 'aquifer', 'arcade', 'arch', 'arch-rival', 'archaeologist', 'archaeology', 'archeology', 'archer', 'architect', 'architecture', 'archives', 'area', 'arena', 'argument', 'arithmetic', 'ark', 'arm', 'arm-rest', 'armadillo', 'armament', 'armchair', 'armoire', 'armor', 'armour', 'armpit', 'armrest', 'army', 'arrangement', 'array', 'arrest', 'arrival', 'arrogance', 'arrow', 'art', 'artery', 'arthur', 'artichoke', 'article', 'artifact', 'artificer', 'artist', 'ascend', 'ascent', 'ascot', 'ash', 'ashram', 'ashtray', 'aside', 'asparagus', 'aspect', 'asphalt', 'aspic', 'ass', 'assassination', 'assault', 'assembly', 'assertion', 'assessment', 'asset', 'assignment', 'assist', 'assistance', 'assistant', 'associate', 'association', 'assumption', 'assurance', 'asterisk', 'astrakhan', 'astrolabe', 'astrologer', 'astrology', 'astronomy', 'asymmetry', 'atelier', 'atheist', 'athlete', 'athletics', 'atmosphere', 'atom', 'atrium', 'attachment', 'attack', 'attacker', 'attainment', 'attempt', 'attendance', 'attendant', 'attention', 'attenuation', 'attic', 'attitude', 'attorney', 'attraction', 'attribute', 'auction', 'audience', 'audit', 'auditorium', 'aunt', 'authentication', 'authenticity', 'author', 'authorisation', 'authority', 'authorization', 'auto', 'autoimmunity', 'automation', 'automaton', 'autumn', 'availability', 'avalanche', 'avenue', 'average', 'avocado', 'award', 'awareness', 'awe', 'axis', 'azimuth', 'babe', 'baboon', 'babushka', 'baby', 'bachelor', 'back', 'back-up', 'backbone', 'backburn', 'backdrop', 'background', 'backpack', 'backup', 'backyard', 'bacon', 'bacterium', 'badge', 'badger', 'bafflement', 'bag', 'bagel', 'baggage', 'baggie', 'baggy', 'bagpipe', 'bail', 'bait', 'bake', 'baker', 'bakery', 'bakeware', 'balaclava', 'balalaika', 'balance', 'balcony', 'ball', 'ballet', 'balloon', 'balloonist', 'ballot', 'ballpark', 'bamboo', 'ban', 'banana', 'band', 'bandana', 'bandanna', 'bandolier', 'bandwidth', 'bangle', 'banjo', 'bank', 'bankbook', 'banker', 'banking', 'bankruptcy', 'banner', 'banquette', 'banyan', 'baobab', 'bar', 'barbecue', 'barbeque', 'barber', 'barbiturate', 'bargain', 'barge', 'baritone', 'barium', 'bark', 'barley', 'barn', 'barometer', 'barracks', 'barrage', 'barrel', 'barrier', 'barstool', 'bartender', 'base', 'baseball', 'baseboard', 'baseline', 'basement', 'basics', 'basil', 'basin', 'basis', 'basket', 'basketball', 'bass', 'bassinet', 'bassoon', 'bat', 'bath', 'bather', 'bathhouse', 'bathrobe', 'bathroom', 'bathtub', 'battalion', 'batter', 'battery', 'batting', 'battle', 'battleship', 'bay', 'bayou', 'beach', 'bead', 'beak', 'beam', 'bean', 'beancurd', 'beanie', 'beanstalk', 'bear', 'beard', 'beast', 'beastie', 'beat', 'beating', 'beauty', 'beaver', 'beck', 'bed', 'bedrock', 'bedroom', 'bee', 'beech', 'beef', 'beer', 'beet', 'beetle', 'beggar', 'beginner', 'beginning', 'begonia', 'behalf', 'behavior', 'behaviour', 'beheading', 'behest', 'behold', 'being', 'belfry', 'belief', 'believer', 'bell', 'belligerency', 'bellows', 'belly', 'belt', 'bench', 'bend', 'beneficiary', 'benefit', 'beret', 'berry', 'best-seller', 'bestseller', 'bet', 'beverage', 'beyond', 'bias', 'bibliography', 'bicycle', 'bid', 'bidder', 'bidding', 'bidet', 'bifocals', 'bijou', 'bike', 'bikini', 'bill', 'billboard', 'billing', 'billion', 'bin', 'binoculars', 'biology', 'biopsy', 'biosphere', 'biplane', 'birch', 'bird', 'bird-watcher', 'birdbath', 'birdcage', 'birdhouse', 'birth', 'birthday', 'biscuit', 'bit', 'bite', 'bitten', 'bitter', 'black', 'blackberry', 'blackbird', 'blackboard', 'blackfish', 'blackness', 'bladder', 'blade', 'blame', 'blank', 'blanket', 'blast', 'blazer', 'blend', 'blessing', 'blight', 'blind', 'blinker', 'blister', 'blizzard', 'block', 'blocker', 'blog', 'blogger', 'blood', 'bloodflow', 'bloom', 'bloomer', 'blossom', 'blouse', 'blow', 'blowgun', 'blowhole', 'blue', 'blueberry', 'blush', 'boar', 'board', 'boat', 'boatload', 'boatyard', 'bob', 'bobcat', 'body', 'bog', 'bolero', 'bolt', 'bomb', 'bomber', 'bombing', 'bond', 'bonding', 'bondsman', 'bone', 'bonfire', 'bongo', 'bonnet', 'bonsai', 'bonus', 'boogeyman', 'book', 'bookcase', 'bookend', 'booking', 'booklet', 'bookmark', 'boolean', 'boom', 'boon', 'boost', 'booster', 'boot', 'bootee', 'bootie', 'booty', 'border', 'bore', 'borrower', 'borrowing', 'bosom', 'boss', 'botany', 'bother', 'bottle', 'bottling', 'bottom', 'bottom-line', 'boudoir', 'bough', 'boulder', 'boulevard', 'boundary', 'bouquet', 'bourgeoisie', 'bout', 'boutique', 'bow', 'bower', 'bowl', 'bowler', 'bowling', 'bowtie', 'box', 'boxer', 'boxspring', 'boy', 'boycott', 'boyfriend', 'boyhood', 'boysenberry', 'bra', 'brace', 'bracelet', 'bracket', 'brain', 'brake', 'bran', 'branch', 'brand', 'brandy', 'brass', 'brassiere', 'bratwurst', 'bread', 'breadcrumb', 'breadfruit', 'break', 'breakdown', 'breakfast', 'breakpoint', 'breakthrough', 'breast', 'breastplate', 'breath', 'breeze', 'brewer', 'bribery', 'brick', 'bricklaying', 'bride', 'bridge', 'brief', 'briefing', 'briefly', 'briefs', 'brilliant', 'brink', 'brisket', 'broad', 'broadcast', 'broccoli', 'brochure', 'brocolli', 'broiler', 'broker', 'bronchitis', 'bronco', 'bronze', 'brooch', 'brood', 'brook', 'broom', 'brother', 'brother-in-law', 'brow', 'brown', 'brownie', 'browser', 'browsing', 'brunch', 'brush', 'brushfire', 'brushing', 'bubble', 'buck', 'bucket', 'buckle', 'buckwheat', 'bud', 'buddy', 'budget', 'buffalo', 'buffer', 'buffet', 'bug', 'buggy', 'bugle', 'builder', 'building', 'bulb', 'bulk', 'bull', 'bull-fighter', 'bulldozer', 'bullet', 'bump', 'bumper', 'bun', 'bunch', 'bungalow', 'bunghole', 'bunkhouse', 'burden', 'bureau', 'burglar', 'burial', 'burlesque', 'burn', 'burn-out', 'burning', 'burrito', 'burro', 'burrow', 'burst', 'bus', 'bush', 'business', 'businessman', 'bust', 'bustle', 'butane', 'butcher', 'butler', 'butter', 'butterfly', 'button', 'buy', 'buyer', 'buying', 'buzz', 'buzzard', 'c-clamp', 'cabana', 'cabbage', 'cabin', 'cabinet', 'cable', 'caboose', 'cacao', 'cactus', 'caddy', 'cadet', 'cafe', 'caffeine', 'caftan', 'cage', 'cake', 'calcification', 'calculation', 'calculator', 'calculus', 'calendar', 'calf', 'caliber', 'calibre', 'calico', 'call', 'calm', 'calorie', 'camel', 'cameo', 'camera', 'camp', 'campaign', 'campaigning', 'campanile', 'camper', 'campus', 'can', 'canal', 'cancer', 'candelabra', 'candidacy', 'candidate', 'candle', 'candy', 'cane', 'cannibal', 'cannon', 'canoe', 'canon', 'canopy', 'cantaloupe', 'canteen', 'canvas', 'cap', 'capability', 'capacity', 'cape', 'caper', 'capital', 'capitalism', 'capitulation', 'capon', 'cappelletti', 'cappuccino', 'captain', 'caption', 'captor', 'car', 'carabao', 'caramel', 'caravan', 'carbohydrate', 'carbon', 'carboxyl', 'card', 'cardboard', 'cardigan', 'care', 'career', 'cargo', 'caribou', 'carload', 'carnation', 'carnival', 'carol', 'carotene', 'carp', 'carpenter', 'carpet', 'carpeting', 'carport', 'carriage', 'carrier', 'carrot', 'carry', 'cart', 'cartel', 'carter', 'cartilage', 'cartload', 'cartoon', 'cartridge', 'carving', 'cascade', 'case', 'casement', 'cash', 'cashew', 'cashier', 'casino', 'casket', 'cassava', 'casserole', 'cassock', 'cast', 'castanet', 'castle', 'casualty', 'cat', 'catacomb', 'catalogue', 'catalysis', 'catalyst', 'catamaran', 'catastrophe', 'catch', 'catcher', 'category', 'caterpillar', 'cathedral', 'cation', 'catsup', 'cattle', 'cauliflower', 'causal', 'cause', 'causeway', 'caution', 'cave', 'caviar', 'cayenne', 'ceiling', 'celebration', 'celebrity', 'celeriac', 'celery', 'cell', 'cellar', 'cello', 'celsius', 'cement', 'cemetery', 'cenotaph', 'census', 'cent', 'center', 'centimeter', 'centre', 'centurion', 'century', 'cephalopod', 'ceramic', 'ceramics', 'cereal', 'ceremony', 'certainty', 'certificate', 'certification', 'cesspool', 'chafe', 'chain', 'chainstay', 'chair', 'chairlift', 'chairman', 'chairperson', 'chaise', 'chalet', 'chalice', 'chalk', 'challenge', 'chamber', 'champagne', 'champion', 'championship', 'chance', 'chandelier', 'change', 'channel', 'chaos', 'chap', 'chapel', 'chaplain', 'chapter', 'character', 'characteristic', 'characterization', 'chard', 'charge', 'charger', 'charity', 'charlatan', 'charm', 'charset', 'chart', 'charter', 'chasm', 'chassis', 'chastity', 'chasuble', 'chateau', 'chatter', 'chauffeur', 'chauvinist', 'check', 'checkbook', 'checking', 'checkout', 'checkroom', 'cheddar', 'cheek', 'cheer', 'cheese', 'cheesecake', 'cheetah', 'chef', 'chem', 'chemical', 'chemistry', 'chemotaxis', 'cheque', 'cherry', 'chess', 'chest', 'chestnut', 'chick', 'chicken', 'chicory', 'chief', 'chiffonier', 'child', 'childbirth', 'childhood', 'chili', 'chill', 'chime', 'chimpanzee', 'chin', 'chinchilla', 'chino', 'chip', 'chipmunk', 'chit-chat', 'chivalry', 'chive', 'chives', 'chocolate', 'choice', 'choir', 'choker', 'cholesterol', 'choosing', 'chop', 'chops', 'chopstick', 'chopsticks', 'chord', 'chorus', 'chow', 'chowder', 'chrome', 'chromolithograph', 'chronicle', 'chronograph', 'chronometer', 'chrysalis', 'chub', 'chuck', 'chug', 'church', 'churn', 'chutney', 'cicada', 'cigarette', 'cilantro', 'cinder', 'cinema', 'cinnamon', 'circadian', 'circle', 'circuit', 'circulation', 'circumference', 'circumstance', 'cirrhosis', 'cirrus', 'citizen', 'citizenship', 'citron', 'citrus', 'city', 'civilian', 'civilisation', 'civilization', 'claim', 'clam', 'clamp', 'clan', 'clank', 'clapboard', 'clarification', 'clarinet', 'clarity', 'clasp', 'class', 'classic', 'classification', 'classmate', 'classroom', 'clause', 'clave', 'clavicle', 'clavier', 'claw', 'clay', 'cleaner', 'clearance', 'clearing', 'cleat', 'cleavage', 'clef', 'cleft', 'clergyman', 'cleric', 'clerk', 'click', 'client', 'cliff', 'climate', 'climb', 'clinic', 'clip', 'clipboard', 'clipper', 'cloak', 'cloakroom', 'clock', 'clockwork', 'clogs', 'cloister', 'clone', 'close', 'closet', 'closing', 'closure', 'cloth', 'clothes', 'clothing', 'cloud', 'cloudburst', 'clove', 'clover', 'cloves', 'club', 'clue', 'cluster', 'clutch', 'co-producer', 'coach', 'coal', 'coalition', 'coast', 'coaster', 'coat', 'cob', 'cobbler', 'cobweb', 'cock', 'cockpit', 'cockroach', 'cocktail', 'cocoa', 'coconut', 'cod', 'code', 'codepage', 'codling', 'codon', 'codpiece', 'coevolution', 'cofactor', 'coffee', 'coffin', 'cohesion', 'cohort', 'coil', 'coin', 'coincidence', 'coinsurance', 'coke', 'cold', 'coleslaw', 'coliseum', 'collaboration', 'collagen', 'collapse', 'collar', 'collard', 'collateral', 'colleague', 'collection', 'collectivisation', 'collectivization', 'collector', 'college', 'collision', 'colloquy', 'colon', 'colonial', 'colonialism', 'colonisation', 'colonization', 'colony', 'color', 'colorlessness', 'colt', 'column', 'columnist', 'comb', 'combat', 'combination', 'combine', 'comeback', 'comedy', 'comestible', 'comfort', 'comfortable', 'comic', 'comics', 'comma', 'command', 'commander', 'commandment', 'comment', 'commerce', 'commercial', 'commission', 'commitment', 'committee', 'commodity', 'common', 'commonsense', 'commotion', 'communicant', 'communication', 'communion', 'communist', 'community', 'commuter', 'company', 'comparison', 'compass', 'compassion', 'compassionate', 'compensation', 'competence', 'competition', 'competitor', 'complaint', 'complement', 'completion', 'complex', 'complexity', 'compliance', 'complication', 'complicity', 'compliment', 'component', 'comportment', 'composer', 'composite', 'composition', 'compost', 'comprehension', 'compress', 'compromise', 'comptroller', 'compulsion', 'computer', 'comradeship', 'con', 'concentrate', 'concentration', 'concept', 'conception', 'concern', 'concert', 'conclusion', 'concrete', 'condition', 'conditioner', 'condominium', 'condor', 'conduct', 'conductor', 'cone', 'confectionery', 'conference', 'confidence', 'confidentiality', 'configuration', 'confirmation', 'conflict', 'conformation', 'confusion', 'conga', 'congo', 'congregation', 'congress', 'congressman', 'congressperson', 'conifer', 'connection', 'connotation', 'conscience', 'consciousness', 'consensus', 'consent', 'consequence', 'conservation', 'conservative', 'consideration', 'consignment', 'consist', 'consistency', 'console', 'consonant', 'conspiracy', 'conspirator', 'constant', 'constellation', 'constitution', 'constraint', 'construction', 'consul', 'consulate', 'consulting', 'consumer', 'consumption', 'contact', 'contact lens', 'contagion', 'container', 'content', 'contention', 'contest', 'context', 'continent', 'contingency', 'continuity', 'contour', 'contract', 'contractor', 'contrail', 'contrary', 'contrast', 'contribution', 'contributor', 'control', 'controller', 'controversy', 'convection', 'convenience', 'convention', 'conversation', 'conversion', 'convert', 'convertible', 'conviction', 'cook', 'cookbook', 'cookie', 'cooking', 'coonskin', 'cooperation', 'coordination', 'coordinator', 'cop', 'cop-out', 'cope', 'copper', 'copy', 'copying', 'copyright', 'copywriter', 'coral', 'cord', 'corduroy', 'core', 'cork', 'cormorant', 'corn', 'corner', 'cornerstone', 'cornet', 'cornflakes', 'cornmeal', 'corporal', 'corporation', 'corporatism', 'corps', 'corral', 'correspondence', 'correspondent', 'corridor', 'corruption', 'corsage', 'cosset', 'cost', 'costume', 'cot', 'cottage', 'cotton', 'couch', 'cougar', 'cough', 'council', 'councilman', 'councilor', 'councilperson', 'counsel', 'counseling', 'counselling', 'counsellor', 'counselor', 'count', 'counter', 'counter-force', 'counterpart', 'counterterrorism', 'countess', 'country', 'countryside', 'county', 'couple', 'coupon', 'courage', 'course', 'court', 'courthouse', 'courtroom', 'cousin', 'covariate', 'cover', 'coverage', 'coverall', 'cow', 'cowbell', 'cowboy', 'coyote', 'crab', 'crack', 'cracker', 'crackers', 'cradle', 'craft', 'craftsman', 'cranberry', 'crane', 'cranky', 'crap', 'crash', 'crate', 'cravat', 'craw', 'crawdad', 'crayfish', 'crayon', 'crazy', 'cream', 'creation', 'creationism', 'creationist', 'creative', 'creativity', 'creator', 'creature', 'creche', 'credential', 'credenza', 'credibility', 'credit', 'creditor', 'creek', 'creme brulee', 'crepe', 'crest', 'crew', 'crewman', 'crewmate', 'crewmember', 'crewmen', 'cria', 'crib', 'cribbage', 'cricket', 'cricketer', 'crime', 'criminal', 'crinoline', 'crisis', 'crisp', 'criteria', 'criterion', 'critic', 'criticism', 'crocodile', 'crocus', 'croissant', 'crook', 'crop', 'cross', 'cross-contamination', 'cross-stitch', 'crotch', 'croup', 'crow', 'crowd', 'crown', 'crucifixion', 'crude', 'cruelty', 'cruise', 'crumb', 'crunch', 'crusader', 'crush', 'crust', 'cry', 'crystal', 'crystallography', 'cub', 'cube', 'cuckoo', 'cucumber', 'cue', 'cuff-link', 'cuisine', 'cultivar', 'cultivator', 'culture', 'culvert', 'cummerbund', 'cup', 'cupboard', 'cupcake', 'cupola', 'curd', 'cure', 'curio', 'curiosity', 'curl', 'curler', 'currant', 'currency', 'current', 'curriculum', 'curry', 'curse', 'cursor', 'curtailment', 'curtain', 'curve', 'cushion', 'custard', 'custody', 'custom', 'customer', 'cut', 'cuticle', 'cutlet', 'cutover', 'cutting', 'cyclamen', 'cycle', 'cyclone', 'cyclooxygenase', 'cygnet', 'cylinder', 'cymbal', 'cynic', 'cyst', 'cytokine', 'cytoplasm', 'dad', 'daddy', 'daffodil', 'dagger', 'dahlia', 'daikon', 'daily', 'dairy', 'daisy', 'dam', 'damage', 'dame', 'damn', 'dance', 'dancer', 'dancing', 'dandelion', 'danger', 'dare', 'dark', 'darkness', 'darn', 'dart', 'dash', 'dashboard', 'data', 'database', 'date', 'daughter', 'dawn', 'day', 'daybed', 'daylight', 'dead', 'deadline', 'deal', 'dealer', 'dealing', 'dearest', 'death', 'deathwatch', 'debate', 'debris', 'debt', 'debtor', 'decade', 'decadence', 'decency', 'decimal', 'decision', 'decision-making', 'deck', 'declaration', 'declination', 'decline', 'decoder', 'decongestant', 'decoration', 'decrease', 'decryption', 'dedication', 'deduce', 'deduction', 'deed', 'deep', 'deer', 'default', 'defeat', 'defendant', 'defender', 'defense', 'deficit', 'definition', 'deformation', 'degradation', 'degree', 'delay', 'deliberation', 'delight', 'delivery', 'demand', 'democracy', 'democrat', 'demon', 'demur', 'den', 'denim', 'denominator', 'density', 'dentist', 'deodorant', 'department', 'departure', 'dependency', 'dependent', 'deployment', 'deposit', 'deposition', 'depot', 'depression', 'depressive', 'depth', 'deputy', 'derby', 'derivation', 'derivative', 'derrick', 'descendant', 'descent', 'description', 'desert', 'design', 'designation', 'designer', 'desire', 'desk', 'desktop', 'dessert', 'destination', 'destiny', 'destroyer', 'destruction', 'detail', 'detainee', 'detainment', 'detection', 'detective', 'detector', 'detention', 'determination', 'detour', 'devastation', 'developer', 'developing', 'development', 'developmental', 'deviance', 'deviation', 'device', 'devil', 'dew', 'dhow', 'diabetes', 'diadem', 'diagnosis', 'diagram', 'dial', 'dialect', 'dialogue', 'diam', 'diamond', 'diaper', 'diaphragm', 'diarist', 'diary', 'dibble', 'dick', 'dickey', 'dictaphone', 'dictator']

export default list